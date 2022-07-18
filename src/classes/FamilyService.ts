import {FamilyServiceCreateParamsInterface, FamilyServiceCreateResponseInterface, FamilyServiceUpdateParamsInterface} from "./AbstractFamilyService";
import AbstractFamilyService from "./AbstractFamilyService"
import RequestBuilder from "./RequestBuilder";
import {useFamilyStore} from "../store/family";
import {useFeeStore} from "../store/fee";
import {Helpers} from "../helpers";
import {FeeServiceCreateParamsInterface, FeeServiceCreateResponseInterface} from "./AbstractFeeService";

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
                if (!error) {
                    const store = useFamilyStore()
                    store.add({
                        ...params,
                        id: (Math.random() + 1).toString(36).substring(7),
                    })
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
        const store = useFamilyStore()
        const diff = Helpers.difference<FeeServiceCreateParamsInterface>(store.getById(payload.id), payload)

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
                    store.update(payload.id, diff)
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
        // await new RequestBuilder()
        //     .method('post')
        //     .url('user/new')
        //     .data(params)
        //     .send()
        return Promise.resolve({} as FamilyServiceCreateResponseInterface)
    }
}

export default FamilyService
