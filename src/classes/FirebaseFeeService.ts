import {FeeServiceCreateResponseInterface, FeeServiceCreateParamsInterface, FeeServiceUpdateParamsInterface, FeeServiceInterface} from "./AbstractFeeService";
import AbstractFeeService from "./AbstractFeeService"
// import RequestBuilder from "./RequestBuilder";

class FirebaseStudentService extends AbstractFeeService {
    /**
     * Create a new user
     * @param {FeeServiceCreateParamsInterface} params
     * @returns Promise<FeeServiceCreateResponseInterface>
     */
    async create(params: FeeServiceCreateParamsInterface): Promise<FeeServiceCreateResponseInterface> {
        // await new RequestBuilder()
        //     .method('post')
        //     .url('user/new')
        //     .data(params)
        //     .send()
        return Promise.resolve({} as FeeServiceCreateResponseInterface)
    }

    /**
     * Update a certain user
     * @param {StudentServiceUpdateParamsInterface} params
     * @returns Promise<StudentServiceCreateResponseInterface>
     */
    async update(params: FeeServiceUpdateParamsInterface): Promise<FeeServiceCreateResponseInterface> {
        // await new RequestBuilder()
        //     .method('post')
        //     .url('user/new')
        //     .data(params)
        //     .send()
        return Promise.resolve({} as FeeServiceCreateResponseInterface)
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

export default FirebaseStudentService
