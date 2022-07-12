// @ts-ignore
import {isRef, reactive, ref, Ref} from "vue";
import {useFormValidator} from "../formValidator";

type VoidFunction = () => void

type Data<T> = { [key in keyof T]?: string | number }

type UseFormParams<T, V> = {
    initialValues?: Data<T>;
    validation?: V,
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
    const {onValidated, onError, initialValues = {}, validation} = params
    const fields = reactive<T>({...initialValues})
    const validationKeys = validation ? Object.keys(validation) : []
    const errorsPlaceholder = validationKeys.reduce((acc: {[key in keyof V]?: string[]}, key: string) => {
        acc[key as keyof V] = []
        return acc
    }, {})
    const validator = validation ? useFormValidator<V>(fields, validation) : null

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
            fields[key] = initialValues[key as keyof typeof initialValues]
        }

        if (validator) {
            validator.reset()
        }
    }

    return {
        fields,
        errors: validator ? validator.errors : errorsPlaceholder,
        submit,
        reset,
    }
}
