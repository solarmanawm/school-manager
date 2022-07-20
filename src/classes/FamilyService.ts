import {
    FamilyServiceCreateParamsInterface,
    FamilyServiceCreateResponseInterface,
    FamilyServiceUpdateParamsInterface
} from "./AbstractFamilyService";
import AbstractFamilyService from "./AbstractFamilyService"
import RequestBuilder from "./RequestBuilder";
import {Helpers} from "../helpers";
import {FeeServiceCreateParamsInterface, FeeServiceCreateResponseInterface} from "./AbstractFeeService";
import {useDataStore} from "../store/data";

class FamilyService extends AbstractFamilyService {
    /**
     * Create a new user
     * @param {FamilyServiceCreateParamsInterface} params
     * @returns Promise<FamilyServiceCreateResponseInterface>
     */
    async create(params: FamilyServiceCreateParamsInterface): Promise<FamilyServiceCreateResponseInterface> {
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
                dataStore.addFamily({
                    ...params,
                    id,
                })

                if (params.fees.length) {
                    for (const feeId of params.fees) {
                        const fee = dataStore.getFeeById(feeId)
                        fee.families.push(id)
                    }
                }

                return Promise.resolve({} as FamilyServiceCreateResponseInterface)
            })
    }

    /**
     * Update a certain user
     * @param {Partial<FamilyServiceCreateParamsInterface>} payload
     * @returns Promise<FamilyServiceCreateResponseInterface>
     */
    async update(payload: Partial<FamilyServiceCreateParamsInterface>): Promise<FamilyServiceCreateResponseInterface> {
        const dataStore = useDataStore()
        const diff = Helpers.difference<FamilyServiceCreateParamsInterface>(dataStore.getFamilyById(payload.id), payload)

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
                dataStore.updateFamily(id, diff)

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
                        if (!fee.families.includes(id)) {
                            fee.families.push(id)
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
     * @param {number} amount
     * @returns Promise<void>
     */
    income(amount: number): Promise<void> {
        console.log('adding income...')
        return Promise.resolve()
    }
}

export default FamilyService
