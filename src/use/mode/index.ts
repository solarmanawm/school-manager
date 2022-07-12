// @ts-ignore
import {computed, ComputedRef, ref, watch} from 'vue'

interface UseMode<T> {
    is: (modeToCompare: ValueOf<T>) => boolean;
    set: (newMode: ValueOf<T>) => void;
}

type ValueOf<T> = T[keyof T];

export function useMode<T>(modes: T, onChange?: () => void): UseMode<T> {
    const values = Object.values(modes)
    const mode = ref('')

    const is = (modeToCompare: ValueOf<T>) => {
        return mode.value === modeToCompare
    }

    const set = (newMode: ValueOf<T>) => {
        if (!values.includes(newMode)) {
            return
        }

        mode.value = newMode
    }

    watch(mode, () => {
        if (typeof onChange === 'function') {
            onChange()
        }
    })

    return {
        is,
        set,
    }
}
