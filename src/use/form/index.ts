// @ts-ignore
import {isRef, reactive, ref, Ref} from "vue";
import {useFormValidator} from "../formValidator";

type VoidFunction = () => void

type Data<T> = { [key in keyof T]?: string | number }

type UseFormParams<T, V> = {
    initialValues?: Data<T>;
    validation?: V,
    onSuccess?: VoidFunction;
    onError?: (error: any) => void;
}

export function useForm<T, V>(params: UseFormParams<T, V>) {
    const {onSuccess, onError, initialValues = {}, validation} = params
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
                        : reject(new Error('Form is invalid.'))
                }
            )
        }).then(() => {
            if (typeof onSuccess === 'function') {
                return onSuccess()
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
