import {FeeServiceCreateResponseInterface, FeeServiceCreateParamsInterface} from "./AbstractFeeService";
import {FamilyServiceCreateParamsInterface} from "./AbstractFamilyService";
import AbstractFeeService from "./AbstractFeeService"
import RequestBuilder from "./RequestBuilder"
import {Helpers} from "../helpers";

import {useDataStore} from "../store/data";

class FeeService extends AbstractFeeService {
    /**
     * Create a new user
     * @param {FeeServiceCreateParamsInterface} params
     * @returns Promise<FeeServiceCreateResponseInterface>
     */
    async create(params: FeeServiceCreateParamsInterface): Promise<FeeServiceCreateResponseInterface> {
        return new RequestBuilder()
            .method('post')
            .url('user/new')
            .data(params)
            .mock<FeeServiceCreateParamsInterface>(true)
            .then(({error}) => {
                if (error) {
                    throw error
                }

                const dataStore = useDataStore()
                const id = (Math.random() + 1).toString(36).substring(7)
                dataStore.addFee({
                    ...params,
                    id,
                })

                if (params.families.length) {
                    for (const familyId of params.families) {
                        const family = dataStore.getFamilyById(familyId)
                        family.fees.push(id)
                    }
                }

                return Promise.resolve({} as FeeServiceCreateResponseInterface)
            })
    }

    /**
     * Update a certain user
     * @param {Partial<FeeServiceCreateParamsInterface>} payload
     * @returns Promise<StudentServiceCreateResponseInterface>
     */
    async update(payload: Partial<FeeServiceCreateParamsInterface>): Promise<FeeServiceCreateResponseInterface> {
        const dataStore = useDataStore()
        const diff = Helpers.difference<FeeServiceCreateParamsInterface>(dataStore.getFeeById(payload.id), payload)

        if (Object.keys(diff).length === 0) {
            return Promise.resolve({} as FeeServiceCreateResponseInterface)
        }

        return new RequestBuilder()
            .method('post')
            .url('user/new')
            .data(diff)
            .mock<FeeServiceCreateParamsInterface>(true)
            .then(({error}) => {
                if (error) {
                    throw error
                }

                const {id} = payload
                const {families} = diff
                dataStore.updateFee(id, diff)

                if (families) {
                    const familiesToRemoveFee = dataStore.families.filter((family: FamilyServiceCreateParamsInterface) => {
                        return !families.includes(family.id)
                    })

                    for (const familyToRemoveFee of familiesToRemoveFee) {
                        familyToRemoveFee.fees = familyToRemoveFee.fees.filter((fee: string) => fee !== id)
                    }

                    const familiesToAddFee = dataStore.families.filter((family: FamilyServiceCreateParamsInterface) => {
                        return families.includes(family.id)
                    })

                    for (const familyToAddFee of familiesToAddFee) {
                        if (!familyToAddFee.fees.includes(id)) {
                            familyToAddFee.fees.push(id)
                        }
                    }
                }

                return Promise.resolve({} as FeeServiceCreateResponseInterface)
            })
    }

    /**
     * Delete a certain user
     * @param {string} id
     * @returns Promise<StudentServiceCreateResponseInterface>
     */
    async delete(id: string): Promise<FeeServiceCreateResponseInterface> {
        return new RequestBuilder()
            .method('post')
            .url('user/new')
            .data({id})
            .mock<FeeServiceCreateParamsInterface>(true)
            .then(({error}) => {
                if (error) {
                    throw error
                }

                const dataStore = useDataStore()
                dataStore.removeFee(id)

                return Promise.resolve({} as FeeServiceCreateResponseInterface)
            })
    }
}

export default FeeService
