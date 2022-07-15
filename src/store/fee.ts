import {defineStore} from "pinia";
import {FeeServiceCreateParamsInterface} from "../classes/AbstractFeeService";

type State = {
    items: FeeServiceCreateParamsInterface[];
}

export const useFeeStore = defineStore('fee', {
    state: () => {
        return {
            items: [],
        } as State
    },
    actions: {
        add(item: FeeServiceCreateParamsInterface) {
            this.items.push(item)
        },
        getById(id: string) {
            return this.items.find((item: FeeServiceCreateParamsInterface) => item.id === id)
        },
    }
})
