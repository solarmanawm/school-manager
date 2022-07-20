import {defineStore} from "pinia";
import {FeeServiceCreateParamsInterface} from "../classes/AbstractFeeService";
import {FamilyServiceCreateParamsInterface} from "../classes/AbstractFamilyService";
import {StudentServiceCreateParamsInterface} from "../classes/AbstractStudentService";

type State = {
    fees: FeeServiceCreateParamsInterface[];
    families: FamilyServiceCreateParamsInterface[];
    students: StudentServiceCreateParamsInterface[];
}

type Id = {id: string}

function getItemById<T extends Id>(source: T[], id: string) {
    return source.find((item: T) => item.id === id)
}

function getItemIndexById<T extends Id>(source: T[], id: string) {
    return source.findIndex((item: T) => item.id === id)
}

function updateItem<T extends Id>(source: T[], id: string, payload: Partial<T>) {
    const itemIndex = getItemIndexById(source, id)
    source[itemIndex] = {
        ...source[itemIndex],
        ...payload,
    }
}

function removeItem<T extends Id>(source: T[], id: string) {
    const itemIndex = getItemIndexById(source, id)
    source.splice(itemIndex, 1);
}

export const useDataStore = defineStore('data', {
    state: () => {
        return {
            fees: [],
            families: [],
            students: [],
        } as State
    },
    actions: {
        /* Fees */
        addFee(item: FeeServiceCreateParamsInterface) {
            this.fees.push(item)
        },
        updateFee(id: string, payload: FeeServiceCreateParamsInterface) {
            updateItem<FeeServiceCreateParamsInterface>(this.fees, id, payload)
        },
        removeFee(id: string) {
            removeItem<FeeServiceCreateParamsInterface>(this.fees, id)
        },
        getFeeById(id: string) {
            return getItemById<FeeServiceCreateParamsInterface>(this.fees, id)
        },
        // getFeeIndexById(id: string) {
        //     return getItemIndexById<FeeServiceCreateParamsInterface>(this.fees, id)
        // },

        /* Families */
        addFamily(item: FamilyServiceCreateParamsInterface) {
            this.families.push(item)
        },
        updateFamily(id: string, payload: FamilyServiceCreateParamsInterface) {
            updateItem<FamilyServiceCreateParamsInterface>(this.families, id, payload)
        },
        removeFamily(id: string) {
            removeItem<FamilyServiceCreateParamsInterface>(this.families, id)
        },
        getFamilyById(id: string) {
            return getItemById<FamilyServiceCreateParamsInterface>(this.families, id)
        },
        // getFamilyIndexById(id: string) {
        //     return getItemIndexById<FamilyServiceCreateParamsInterface>(this.families, id)
        // },

        /* Students */
        addStudent(item: StudentServiceCreateParamsInterface) {
            this.students.push(item)
        },
        updateStudent(id: string, payload: StudentServiceCreateParamsInterface) {
            updateItem<StudentServiceCreateParamsInterface>(this.students, id, payload)
        },
        removeStudent(id: string) {
            removeItem<StudentServiceCreateParamsInterface>(this.students, id)
        },
        getStudentById(id: string) {
            return getItemById<StudentServiceCreateParamsInterface>(this.students, id)
        },
        // getStudentIndexById(id: string) {
        //     return getItemIndexById<FamilyServiceCreateParamsInterface>(this.students, id)
        // },
    }
})
