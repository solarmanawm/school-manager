import useVuelidate from "@vuelidate/core"
// @ts-ignore
import {reactive, ref, Ref} from 'vue'

type SubmitCallback = (resolve: Function, reject: Function) => void
type ErrorCallback = (error?: Error) => void

type InitialValues<T> = {
    [key in keyof T]: string | number;
}

type ValidationObject<T> = {
    [key in keyof T]?: object;
}

export function useForm<T>(initialValues: InitialValues<T>, validationObject: ValidationObject<T>) {
    const form = reactive<T>(initialValues)
    const validator = useVuelidate(validationObject, form)

    return {
        form,
    }
}
