// @ts-ignore
import {isRef, reactive, ref, Ref} from "vue";
import {useFormValidator} from "../formValidator";

type VoidFunction = () => void

type Data<T> = { [key in keyof T]?: string | number | any[] }

type Fields<T> = { [key in keyof T]: Ref }

type UseFormParams<T, V> = {
    initialValues?: Data<T>;
    validation?: V,
    validationMessages?: Partial<V>,
    onValidated?: VoidFunction;
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
    // const fields = reactive<T>({...initialValues})
    const fields: Fields<T> = Object.keys(initialValues).reduce((acc: Fields<T>, current: string) => {
        acc[current as keyof Fields<T>] = ref(initialValues[current as keyof typeof initialValues])
        return acc
    }, {} as Fields<T>)
    const validationKeys = validation ? Object.keys(validation) : []
    const errorsPlaceholder = validationKeys.reduce((acc: {[key in keyof V]?: string[]}, key: string) => {
        acc[key as keyof V] = []
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
                        ? resolve()
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
            fields[key as keyof Fields<T>].value = initialValues[key as keyof typeof initialValues]
        }

        if (validator) {
            validator.reset()
        }
    }

    const values = () => {
        return Object.keys(fields).reduce((acc, current: string) => {
            acc[current as keyof Fields<T>] = fields[current as keyof Fields<T>].value
            return acc
        }, {} as Fields<T>)
    }

    return {
        fields,
        values,
        errors: validator ? validator.errors : errorsPlaceholder,
        submit,
        reset,
    }
}
