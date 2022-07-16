import {FeeServiceCreateResponseInterface, FeeServiceCreateParamsInterface} from "./AbstractFeeService";
import AbstractFeeService from "./AbstractFeeService"
import RequestBuilder from "./RequestBuilder"
import {Helpers} from "../helpers";

import {useFeeStore} from "../store/fee";

class FirebaseFeeService extends AbstractFeeService {
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
                if (!error) {
                    const feeStore = useFeeStore()
                    feeStore.add({
                        ...params,
                        id: (Math.random() + 1).toString(36).substring(7),
                    })
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
        const feeStore = useFeeStore()
        const diff = Helpers.difference<FeeServiceCreateParamsInterface>(feeStore.getById(payload.id), payload)

        if (Object.keys(diff).length === 0) {
            return Promise.resolve({} as FeeServiceCreateResponseInterface)
        }

        return new RequestBuilder()
            .method('post')
            .url('user/new')
            .data(diff)
            .mock<FeeServiceCreateParamsInterface>(true)
            .then(({error}) => {
                if (!error) {
                    feeStore.update(payload.id, diff)
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
                if (!error) {
                    const feeStore = useFeeStore()
                    feeStore.remove(id)
                }

                return Promise.resolve({} as FeeServiceCreateResponseInterface)
            })
    }
}

export default FirebaseFeeService
