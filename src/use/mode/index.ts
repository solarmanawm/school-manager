// @ts-ignore
import {computed, ComputedRef, ref, watch} from 'vue'

interface UseMode<T> {
    is: (modeToCompare?: string | undefined) => boolean;
    set: (newMode: string) => void;
    reset: () => void;
    value: () => string;
}

export function useMode<T>(modes: T, onChange?: () => void): UseMode<T> {
    const values = Object.values(modes)
    const mode = ref('')

    const is = (modeToCompare?: string | undefined) => {
        return typeof modeToCompare !== 'undefined' ? mode.value === modeToCompare : mode.value !== ''
    }

    const set = (newMode: string) => {
        if (!values.includes(newMode)) {
            return
        }

        mode.value = newMode
    }

    const reset = () => {
        mode.value = ''
    }

    const value = () => mode.value

    watch(mode, () => {
        if (typeof onChange === 'function') {
            onChange()
        }
    })

    return {
        is,
        set,
        reset,
        value,
    }
}
