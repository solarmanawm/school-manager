import {FeeServiceCreateResponseInterface, FeeServiceCreateParamsInterface, FeeServiceUpdateParamsInterface} from "./AbstractFeeService";
import AbstractFeeService from "./AbstractFeeService"
import RequestBuilder from "./RequestBuilder"

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
            .then(({error, item}) => {
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
     * @param {StudentServiceUpdateParamsInterface} params
     * @returns Promise<StudentServiceCreateResponseInterface>
     */
    async update(params: FeeServiceUpdateParamsInterface): Promise<FeeServiceCreateResponseInterface> {
        return new RequestBuilder()
            .method('post')
            .url('user/new')
            .data(params)
            .mock(true)
            .then(() => {
                return Promise.resolve({} as FeeServiceCreateResponseInterface)
            })
    }

    /**
     * Delete a certain user
     * @param {string} id
     * @returns Promise<StudentServiceCreateResponseInterface>
     */
    async delete(id: string): Promise<FeeServiceCreateResponseInterface> {
        // await new RequestBuilder()
        //     .method('post')
        //     .url('user/new')
        //     .data(params)
        //     .send()
        return Promise.resolve({} as FeeServiceCreateResponseInterface)
    }
}

export default FirebaseFeeService
