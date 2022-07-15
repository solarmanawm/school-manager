// @ts-ignore
import {computed, ComputedRef, ref, Ref} from "vue";
import useVuelidate, {ErrorObject} from "@vuelidate/core"
import * as validators from "@vuelidate/validators"

type Fields = { [key: string]: Ref }

const mappedValidators = {
    required: () => validators.required,
    minLength: (value: [] | object | string) => validators.minLength(value),
}

export function useFormValidator<T>(fields: Fields, validation: T) {
    const validationKeys = Object.keys(validation)
    const validationObj = validationKeys.reduce((acc: {[key in keyof T]?: any}, key: string) => {
        const current = Object.entries(validation[key as keyof T])

        if (current.length) {
            for (const v of [...current]) {
                if (!acc[key as keyof T]) {
                    acc[key as keyof T] = {}
                }

                const [validatorName, validatorParam] = v
                acc[key as keyof T][validatorName] = mappedValidators[validatorName as keyof typeof mappedValidators](validatorParam)
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
