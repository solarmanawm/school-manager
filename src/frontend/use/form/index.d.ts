import { Ref, ComputedRef } from "vue";
import { ErrorObject } from "@vuelidate/core";
declare type Data<T> = {
    [key in keyof T]?: string | number | any[] | boolean;
};
declare type Fields<T> = {
    [key in keyof T]: Ref;
};
declare type UseFormParams<T, V> = {
    initialValues?: Data<T>;
    validation?: V;
    validationMessages?: Partial<V>;
    onValidated?: Function;
    onError?: (error: any) => void;
};
export declare function useForm<T, V>(params: UseFormParams<T, V>): {
    fields: Fields<T>;
    values: () => T;
    errors: { [key in keyof V]?: ComputedRef<ErrorObject[]> | undefined; };
    submit: (shouldBeValidated?: boolean) => Promise<any>;
    reset: () => void;
};
export {};
