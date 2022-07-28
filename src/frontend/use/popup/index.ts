// @ts-ignore
import {computed, Ref, ref, watch} from "vue";

type VoidFunction = () => void;

interface UsePopupParams {
    state?: boolean;
    onOpen?: VoidFunction;
    onClose?: VoidFunction;
}

type UsePopup = (params?: UsePopupParams) => {
    visible: Ref<boolean>;
    close: () => void;
    open: () => void;
}

const defaultParams: UsePopupParams = {
    state: false,
    onClose: () => {},
    onOpen: () => {},
}

export const usePopup: UsePopup = (params: UsePopupParams = defaultParams) => {
    const {state = false, onOpen, onClose} = params
    const visible = ref<boolean>(state)

    const open = () => {
        visible.value = true
    }

    const close = () => {
        visible.value = false
    }

    watch(visible, (value: boolean) => {
        return value
            ? typeof onOpen === 'function' && onOpen()
            : typeof onClose === 'function' && onClose()
    })

    return {
        visible,
        close,
        open,
    }
}
