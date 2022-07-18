import {defineStore} from "pinia";
import {FamilyServiceCreateParamsInterface} from "../classes/AbstractFamilyService";

type State = {
    items: FamilyServiceCreateParamsInterface[];
}

export const useFamilyStore = defineStore('family', {
    state: () => {
        return {
            items: [],
        } as State
    },
    actions: {
        add(item: FamilyServiceCreateParamsInterface) {
            this.items.push(item)
        },
        update(id: string, payload: Partial<FamilyServiceCreateParamsInterface>) {
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
            return this.items.find((item: FamilyServiceCreateParamsInterface) => item.id === id)
        },
        getIndexById(id: string) {
            return this.items.findIndex((item: FamilyServiceCreateParamsInterface) => item.id === id)
        },
    }
})
