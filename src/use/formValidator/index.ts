// @ts-ignore
import {computed, ComputedRef, ref, Ref} from "vue";
import useVuelidate, {ErrorObject} from "@vuelidate/core"
import * as validators from "@vuelidate/validators"

const mappedValidators = {
    required: (formFields: Ref, value: any) => validators.required,
}

export function useFormValidator<T>(fields: Ref, validation: T) {
    const validationKeys = Object.keys(validation)
    const validationObj = validationKeys.reduce((acc: {[key in keyof T]?: any}, key: string) => {
        const current = Object.entries(validation[key as keyof T])

        if (current.length) {
            const [validatorName, validatorParam] = current.pop()!
            acc[key as keyof T] = {
                [validatorName]: mappedValidators[validatorName as keyof typeof mappedValidators](fields, validatorParam),
            }
        }

        return acc
    }, {})
    const validator = useVuelidate(validationObj, fields)
    const errors = validationKeys.reduce((acc: {[key in keyof T]?: ComputedRef<ErrorObject[]>}, key) => {
        acc[key as keyof T] = computed(() => validator.value[key] ? validator.value[key].$errors : [])
        return acc
    }, {})

    const validate = () => {
        return validator.value.$validate().then((isValid: boolean) => {
            return Promise.resolve(isValid)
        })
    }

    const reset = () => {
        validator.value.$reset()
    }

    return {
        validate,
        errors,
        reset,
    }
}
