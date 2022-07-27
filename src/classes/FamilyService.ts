import {FamilyInterface, FamilyServiceCreateParamsInterface, FamilyServiceCreateResponseInterface} from "./AbstractFamilyService";
import AbstractFamilyService from "./AbstractFamilyService"
import RequestBuilder from "./RequestBuilder";
import {Helpers} from "../helpers";
import {FeeServiceCreateParamsInterface, FeeServiceCreateResponseInterface} from "./AbstractFeeService";
import {useDataStore} from "../store/data";

class FamilyService extends AbstractFamilyService {
    /**
     * Create a new user
     * @param {FamilyInterface} params
     * @returns Promise<FamilyServiceCreateResponseInterface>
     */
    async create(params: FamilyInterface): Promise<FamilyServiceCreateResponseInterface> {
        return new RequestBuilder()
            .method('post')
            .url('user/new')
            .data(params)
            .mock<FamilyServiceCreateParamsInterface>(true)
            .then(({error}) => {
                if (error) {
                    throw error
                }

                const dataStore = useDataStore()
                const id = (Math.random() + 1).toString(36).substring(7)
                const newFamilyItem: FamilyServiceCreateParamsInterface = {
                    ...params,
                    id,
                    income: 0,
                    createdAt: new Date().toString(),
                }
                dataStore.addFamily(newFamilyItem)

                if (params.fees.length) {
                    for (const feeId of params.fees) {
                        const fee = dataStore.getFeeById(feeId)

                        if (fee) {
                            fee.families.push(id)
                        }
                    }
                }

                return Promise.resolve({} as FamilyServiceCreateResponseInterface)
            })
    }

    /**
     * Update a certain user
     * @param {Partial<FamilyInterface>} payload
     * @returns Promise<FamilyServiceCreateResponseInterface>
     */
    async update(payload: Partial<FamilyInterface>): Promise<FamilyServiceCreateResponseInterface> {
        const dataStore = useDataStore()
        const diff = Helpers.difference<FamilyInterface>(dataStore.getFamilyById(payload.id as string) as FamilyInterface, payload)

        if (Object.keys(diff).length === 0) {
            return Promise.resolve({} as FeeServiceCreateResponseInterface)
        }

        return new RequestBuilder()
            .method('post')
            .url('user/new')
            .data(diff)
            .mock<FamilyServiceCreateParamsInterface>(true)
            .then(({error}) => {
                if (error) {
                    throw error
                }

                const {id} = payload
                const {fees} = diff
                dataStore.updateFamily(id as string, diff)

                if (fees) {
                    const feesToRemoveFamily = dataStore.fees.filter((family: FeeServiceCreateParamsInterface) => {
                        return !fees.includes(family.id)
                    })

                    for (const fee of feesToRemoveFamily) {
                        fee.families = fee.families.filter((family: string) => family !== id)
                    }

                    const feesToAddFamily = dataStore.fees.filter((family: FeeServiceCreateParamsInterface) => {
                        return fees.includes(family.id)
                    })

                    for (const fee of feesToAddFamily) {
                        if (!fee.families.includes(id as string)) {
                            fee.families.push(id as string)
                        }
                    }
                }

                return Promise.resolve({} as FeeServiceCreateResponseInterface)
            })
    }

    /**
     * Delete a certain user
     * @param {string} id
     * @returns Promise<FamilyServiceCreateResponseInterface>
     */
    async delete(id: string): Promise<FamilyServiceCreateResponseInterface> {
        return new RequestBuilder()
            .method('post')
            .url('user/new')
            .data({id})
            .mock<FamilyServiceCreateParamsInterface>(true)
            .then(({error}) => {
                if (error) {
                    throw error
                }

                const dataStore = useDataStore()
                dataStore.removeFamily(id)

                return Promise.resolve({} as FeeServiceCreateResponseInterface)
            })
    }

    /**
     * Add an income amount.
     * @param {string} id
     * @param {number} amount
     * @returns Promise<void>
     */
    income(id: string, amount: number): Promise<void> {
        return new RequestBuilder()
            .method('post')
            .url('user/new')
            .data({id})
            .mock<FamilyServiceCreateParamsInterface>(true)
            .then(({error}) => {
                if (error) {
                    throw error
                }

                const dataStore = useDataStore()
                const family = dataStore.getFamilyById(id)

                if (family) {
                    family.income += amount
                }

                return Promise.resolve()
            })
    }

    /**
     * Add an income.
     * @param {string} id
     * @returns Promise<void>
     */
    resetIncome(id: string): Promise<void> {
        return new RequestBuilder()
            .method('post')
            .url('user/new')
            .data({id})
            .mock<FamilyServiceCreateParamsInterface>(true)
            .then(({error}) => {
                if (error) {
                    throw error
                }

                const dataStore = useDataStore()
                const family = dataStore.getFamilyById(id)

                if (family) {
                    family.income = 0
                }

                return Promise.resolve()
            })
    }
}

export default FamilyService
