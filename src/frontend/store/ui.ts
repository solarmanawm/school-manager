import {defineStore} from "pinia";

export const useUIStore = defineStore('ui', {
    state: () => {
        return {
            title: '',
        }
    },
})

export default useUIStore
