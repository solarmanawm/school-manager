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
        update(id: string, payload: Partial<FeeServiceCreateParamsInterface>) {
            const itemIndex = this.getIndexById(id)
            this.items[itemIndex] = {
                ...this.items[itemIndex],
                ...payload,
            }
        },
        remove(id: string) {
            const itemIndex = this.getIndexById(id)
            this.items.splice(itemIndex, 1);
        },
        getById(id: string) {
            return this.items.find((item: FeeServiceCreateParamsInterface) => item.id === id)
        },
        getIndexById(id: string) {
            return this.items.findIndex((item: FeeServiceCreateParamsInterface) => item.id === id)
        },
    }
})
