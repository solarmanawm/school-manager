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
    const fields = reactive<T>(initialValues)
    const validationKeys = validation ? Object.keys(validation) : []
    const validator = validation ? useFormValidator<V>(fields, validation) : null
    const errors = reactive<V>(validationKeys.reduce((acc: {}, key: string) => {
        // @ts-ignore
        acc[key] = []
        return acc
    }, {}))

    const submit = () => {
        return new Promise((resolve) => {
            if (validator) {
                validator.validate().then((isValid: boolean) => {
                    const validatorErrors = validator.getErrors()
                    for (const key of validationKeys) {
                        if (validatorErrors[key as keyof typeof validatorErrors]) {
                            errors[key] = validatorErrors[key as keyof typeof validatorErrors]
                        }
                    }
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
        if (validator) {
            validator.reset()
        }
    }

    return {
        fields,
        errors,
        submit,
        reset,
    }
}
