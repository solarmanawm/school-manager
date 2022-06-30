import useVuelidate from "@vuelidate/core"
// @ts-ignore
import {ref, Ref} from 'vue'

type SubmitCallback = (resolve: Function, reject: Function) => void
type ErrorCallback = (error?: Error) => void

type Fields<T> = {
    [key in keyof T]: Ref;
}

interface UseFormControlArgs {
    value: string | number;
    validation?: object;
}

type UseFormArgs<T> = {
    [key in keyof T]: UseFormControlArgs;
}

export function useForm<T>(args: UseFormArgs<T>) {
    const validation: {[key: string]: any} = {}
    const isSubmitted = ref(false)
    const keys = Object.keys(args)
    const fields: Fields<T> = keys.reduce((a, c) => {
        const current = c as keyof T
        a[current] = ref(args[current].value)
        validation[current as keyof typeof validation] = args[current].validation || {}
        return a
    }, {} as Fields<T>)
    const validator = useVuelidate(validation, fields)
    let callback: SubmitCallback = () => {}
    let errorCallback: ErrorCallback = () => {}
    const onSubmit = (cb: SubmitCallback) => {
        callback = cb
    }
    const onError = (cb: ErrorCallback) => {
        errorCallback = cb
    }

    const values = () => {
        return Object.keys(fields).reduce((a: T, c: string) => {
            a[c as keyof T] = fields[c as keyof T].value
            return a
        }, {} as T)
    }

    const reset = () => {
        validator.value.$reset()

        for (const k of keys) {
            fields[k as keyof typeof fields].value = args[k as keyof typeof fields].value
        }
    }

    const submit = () => {
        if (!isSubmitted.value) {
            isSubmitted.value = true
        }

        return Promise.resolve().then(() => validator.value.$validate()).then((isValid) => {
            if (!isValid) {
                return;
            }

            return new Promise(callback)
        }).catch(errorCallback)
    }

    return {
        form: {
            fields,
            $v: validator.value,
            reset,
            values,
            submit,
        },
        onSubmit,
        onError,
    }
}
