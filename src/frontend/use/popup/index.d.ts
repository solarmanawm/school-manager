import { Ref } from "vue";
declare type VoidFunction = () => void;
interface UsePopupParams {
    state?: boolean;
    onOpen?: VoidFunction;
    onClose?: VoidFunction;
}
declare type UsePopup = (params?: UsePopupParams) => {
    visible: Ref<boolean>;
    close: () => void;
    open: () => void;
};
export declare const usePopup: UsePopup;
export {};
