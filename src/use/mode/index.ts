// @ts-ignore
import {computed, ComputedRef, ref, watch} from 'vue'

interface UseMode<T> {
    is: (modeToCompare?: ValueOf<T>) => boolean;
    set: (newMode: ValueOf<T>) => void;
    reset: () => void;
}

type ValueOf<T> = T[keyof T];

export function useMode<T>(modes: T, onChange?: () => void): UseMode<T> {
    const values = Object.values(modes)
    const mode = ref('')

    const is = (modeToCompare?: ValueOf<T>) => {
        return typeof modeToCompare !== 'undefined' ? mode.value === modeToCompare : mode.value !== ''
    }

    const set = (newMode: ValueOf<T>) => {
        if (!values.includes(newMode)) {
            return
        }

        mode.value = newMode
    }

    const reset = () => {
        mode.value = ''
    }

    watch(mode, () => {
        if (typeof onChange === 'function') {
            onChange()
        }
    })

    return {
        is,
        set,
        reset,
    }
}
