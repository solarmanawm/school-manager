// @ts-ignore
import {computed, ComputedRef, ref, Ref} from "vue";
import useVuelidate, {ErrorObject, ValidationArgs, ValidationRule} from "@vuelidate/core"
import { helpers } from '@vuelidate/validators'
import * as validators from "@vuelidate/validators"

type Fields = { [key: string]: Ref }

const withMessage = (message: string, rule: ValidationRule) => {
    return helpers.withMessage(message, rule)
}

const mappedValidators = {
    integer: () => validators.integer,
    required: () => validators.required,
    minLength: (value: number) => validators.minLength(value),
}
const mappedValidatorsKeys = Object.keys(mappedValidators)

const getRule = (rule: string, params: any) => {
    if (mappedValidatorsKeys.includes(rule)) {
        return mappedValidators[rule as keyof typeof mappedValidators](params)
    } else {
        return params
    }
}

export function useFormValidator<T>(fields: Fields, validation: T, validationMessages: Partial<T>) {
    const validationKeys = Object.keys(validation)
    const validationObj = validationKeys.reduce((acc: {[key in keyof T]?: any}, key: string) => {
        const current = Object.entries(validation[key as keyof T])

        if (current.length) {
            for (const v of [...current]) {
                if (!acc[key as keyof T]) {
                    acc[key as keyof T] = {}
                }

                const [validatorName, validatorParam] = v
                const validationMessage = validationMessages[key as keyof T]
                // @ts-ignore
                const message = validationMessage ? validationMessage[validatorName] : ''
                const rule = getRule(validatorName, validatorParam)
                acc[key as keyof T][validatorName] = message ? withMessage(message, rule) : rule
            }
        }

        return acc
    }, {})
    const validator = useVuelidate(validationObj, fields as any)
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
