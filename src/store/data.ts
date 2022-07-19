import {defineStore} from "pinia";
import {FeeServiceCreateParamsInterface} from "../classes/AbstractFeeService";
import {FamilyServiceCreateParamsInterface} from "../classes/AbstractFamilyService";

type State = {
    fees: FeeServiceCreateParamsInterface[];
    families: FamilyServiceCreateParamsInterface[];
}

type Source = FeeServiceCreateParamsInterface | FamilyServiceCreateParamsInterface

const getItemById = (source: Source[], id: string) => {
    return source.find((item: Source) => item.id === id)
}

const getItemIndexById = (source: Source[], id: string) => {
    return source.findIndex((item: Source) => item.id === id)
}

const updateItem = (source: Source[], id: string, payload: Partial<Source>) => {
    const itemIndex = getItemIndexById(source, id)
    source[itemIndex] = {
        ...source[itemIndex],
        ...payload,
    }
}

const removeItem = (source: Source[], id: string) => {
    const itemIndex = getItemIndexById(source, id)
    source.splice(itemIndex, 1);
}

export const useDataStore = defineStore('data', {
    state: () => {
        return {
            fees: [],
            families: [],
        } as State
    },
    actions: {
        /* Fees */
        addFee(item: FeeServiceCreateParamsInterface) {
            this.fees.push(item)
        },
        updateFee(id: string, payload: FeeServiceCreateParamsInterface) {
            updateItem(this.fees, id, payload)
        },
        removeFee(id: string) {
            removeItem(this.fees, id)
        },
        getFeeById(id: string) {
            return getItemById(this.fees, id)
        },
        // getFeeIndexById(id: string) {
        //     return getItemIndexById(this.fees, id)
        // },

        /* Families */
        addFamily(item: FeeServiceCreateParamsInterface) {
            this.families.push(item)
        },
        updateFamily(id: string, payload: FeeServiceCreateParamsInterface) {
            updateItem(this.families, id, payload)
        },
        removeFamily(id: string) {
            removeItem(this.families, id)
        },
        getFamilyById(id: string) {
            return getItemById(this.families, id)
        },
        // getFamilyIndexById(id: string) {
        //     return getItemIndexById(this.families, id)
        // },
    }
})
