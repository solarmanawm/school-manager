// @ts-ignore
import {isRef, reactive, ref, Ref, ComputedRef, computed} from "vue";
import {useFormValidator} from "../formValidator";
import {ErrorObject} from "@vuelidate/core";

type Data<T> = { [key in keyof T]?: string | number | any[] | boolean }

type Fields<T> = { [key in keyof T]: Ref }

type UseFormParams<T, V> = {
    initialValues?: Data<T>;
    validation?: V,
    validationMessages?: Partial<V>,
    onValidated?: Function;
    onError?: (error: any) => void;
}

class FormValidationError extends Error {
    constructor(message: string) {
        super(message);

        this.name = 'FormValidationError'
    }
}

export function useForm<T, V>(params: UseFormParams<T, V>) {
    const {onValidated, onError, initialValues = {}, validation, validationMessages = {}} = params
    const fields: Fields<T> = Object.keys(initialValues).reduce((acc: Fields<T>, current: string) => {
        if (Array.isArray(initialValues[current as keyof typeof initialValues])) {
            acc[current as keyof Fields<T>] = ref((initialValues[current as keyof typeof initialValues] as []).slice())
        } else {
            acc[current as keyof Fields<T>] = ref(initialValues[current as keyof typeof initialValues])
        }
        return acc
    }, {} as Fields<T>)
    const validationKeys = validation ? Object.keys(validation) : []
    const errorsPlaceholder = validationKeys.reduce((acc: {[key in keyof V]?: ComputedRef<ErrorObject[]>}, key: string) => {
        acc[key as keyof V] = computed(() => ([] as ErrorObject[]))
        return acc
    }, {})
    const validator = validation ? useFormValidator<V>(fields, validation, validationMessages) : null

    const submit = (shouldBeValidated: boolean = true) => {
        return new Promise((resolve) => {
            if (validator && shouldBeValidated) {
                validator.validate().then((isValid: boolean) => {
                    resolve(isValid)
                })
            } else {
                resolve(true)
            }
        }).then((validated) => {
            return new Promise((resolve, reject) => {
                    return validated
                        ? resolve(undefined)
                        : reject(new FormValidationError('Form is invalid.'))
                }
            )
        }).then(() => {
            if (typeof onValidated === 'function') {
                return onValidated()
            }
        }).catch((error) => {
            if (typeof onError === 'function') {
                return onError(error)
            }
        })
    }

    const reset = () => {
        const keys = Object.keys(initialValues)

        for (const key of keys) {
            if (Array.isArray(initialValues[key as keyof typeof initialValues])) {
                fields[key as keyof Fields<T>].value = (initialValues[key as keyof typeof initialValues] as []).slice()
            } else {
                fields[key as keyof Fields<T>].value = initialValues[key as keyof typeof initialValues]
            }
        }

        if (validator) {
            validator.reset()
        }
    }

    const values = () => {
        return Object.keys(fields).reduce((acc, current: string) => {
            acc[current as keyof Fields<T>] = fields[current as keyof Fields<T>].value
            return acc
        }, {} as T)
    }

    return {
        fields,
        values,
        errors: validator ? validator.errors : errorsPlaceholder,
        submit,
        reset,
    }
}
