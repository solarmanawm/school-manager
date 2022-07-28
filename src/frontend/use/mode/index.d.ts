interface UseMode<T> {
    is: (modeToCompare?: string | undefined) => boolean;
    set: (newMode: string) => void;
    reset: () => void;
    value: () => string;
}
export declare function useMode<T>(modes: T, onChange?: () => void): UseMode<T>;
export {};
