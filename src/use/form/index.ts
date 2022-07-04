import {Validation} from "@vuelidate/core";

type VoidFunction = () => void

type UseFormParams = {
    validator?: Validation;
    onSuccess?: VoidFunction;
    onError?: (error: any) => void;
}

export const useForm = (params: UseFormParams) => {
    const {validator, onSuccess, onError} = params

    const submit = () => {
        return new Promise((resolve) => {
            if (validator) {
                validator.$validate().then((isValid) => resolve(isValid))
            } else {
                resolve(true)
            }
        }).then((validated) => {
            return new Promise((resolve, reject) => {
                if (validated) {
                    // Send data to server
                    return Promise.resolve().then(() => resolve())
                } else {
                    reject(new Error('Form is invalid.'))
                }
            })
        }).then(() => {
            if (typeof onSuccess === 'function') {
                onSuccess()
            }
        }).catch((error) => {
            if (typeof onError === 'function') {
                onError(error)
            }
        })
    }

    const reset = () => {}

    return {
        submit,
        reset,
    }
}
