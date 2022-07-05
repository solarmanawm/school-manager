// @ts-ignore
import {Ref} from "vue";

export const useError = (errorsRef: Ref) => {
    const handler = (error: any) => {
        if (typeof error === 'object') {
            if (error.name && error.name === 'FormValidationError') {
                return
            }
        }

        console.error(error)
    }

    return handler
}
