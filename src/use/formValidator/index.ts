// @ts-ignore
import {reactive, Ref} from "vue";
import useVuelidate, {ErrorObject, Validation} from "@vuelidate/core"
import * as validators from "@vuelidate/validators"

const mappedValidators = {
    required: (formFields: Ref, value: any) => validators.required,
}

export function useFormValidator<T>(fields: Ref, validation: T) {
    const validationKeys = Object.keys(validation)
    const errors = reactive<{[key in keyof T]: string[]}>({})
    const validationObj = validationKeys.reduce((acc: object, key: string) => {
        const current = Object.entries(validation[key as keyof typeof validation])

        if (current.length) {
            const [validatorName, validatorParam] = current.pop()!
            // @ts-ignore
            acc[key] = {
                [validatorName]: mappedValidators[validatorName as unknown as keyof typeof mappedValidators](fields, validatorParam),
            }
        }

        return acc
    }, {})
    const validator = useVuelidate(validationObj, fields)

    const validate = () => {
        return validator.value.$validate()
    }

    const getErrors = () => {
        for (const k of validationKeys) {
            const prop = validator.value[k]
            if (prop) {
                errors[k] = prop.$errors.map((e: ErrorObject) => e.$message)
            }
        }
        return errors
    }

    const reset = () => {
        validator.value.$reset()
    }

    return {
        validate,
        getErrors,
        reset,
    }
}
