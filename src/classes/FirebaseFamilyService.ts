import {FamilyServiceCreateParamsInterface, FamilyServiceCreateResponseInterface, FamilyServiceUpdateParamsInterface} from "./AbstractFamilyService";
import AbstractFamilyService from "./AbstractFamilyService"
// import RequestBuilder from "./RequestBuilder";

class FirebaseFamilyService extends AbstractFamilyService {
    /**
     * Create a new user
     * @param {FamilyServiceCreateParamsInterface} params
     * @returns Promise<FamilyServiceCreateResponseInterface>
     */
    async create(params: FamilyServiceCreateParamsInterface): Promise<FamilyServiceCreateResponseInterface> {
        // await new RequestBuilder()
        //     .method('post')
        //     .url('user/new')
        //     .data(params)
        //     .send()
        return Promise.resolve({} as FamilyServiceCreateResponseInterface)
    }

    /**
     * Update a certain user
     * @param {FamilyServiceUpdateParamsInterface} params
     * @returns Promise<FamilyServiceCreateResponseInterface>
     */
    async update(params: FamilyServiceUpdateParamsInterface): Promise<FamilyServiceCreateResponseInterface> {
        // await new RequestBuilder()
        //     .method('post')
        //     .url('user/new')
        //     .data(params)
        //     .send()
        return Promise.resolve({} as FamilyServiceCreateResponseInterface)
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

export default FirebaseFamilyService
