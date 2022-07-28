import { ComputedRef, Ref } from "vue";
import { ErrorObject } from "@vuelidate/core";
declare type Fields = {
    [key: string]: Ref;
};
export declare function useFormValidator<T>(fields: Fields, validation: T, validationMessages: Partial<T>): {
    validate: () => Promise<boolean>;
    errors: { [key in keyof T]?: ComputedRef<ErrorObject[]> | undefined; };
    reset: () => void;
};
export {};
