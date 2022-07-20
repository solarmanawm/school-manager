import {StudentServiceCreateParamsInterface, StudentServiceCreateResponseInterface} from "./AbstractStudentService";
import AbstractStudentService from "./AbstractStudentService"
// import RequestBuilder from "./RequestBuilder";

class StudentService extends AbstractStudentService {
    /**
     * Create a new user
     * @param {StudentServiceCreateParamsInterface} params
     * @returns Promise<StudentServiceCreateResponseInterface>
     */
    async create(params: StudentServiceCreateParamsInterface): Promise<StudentServiceCreateResponseInterface> {
        // await new RequestBuilder()
        //     .method('post')
        //     .url('user/new')
        //     .data(params)
        //     .send()
        return Promise.resolve({} as StudentServiceCreateResponseInterface)
    }

    /**
     * Update a certain user
     * @param {Partial<StudentServiceCreateParamsInterface>} params
     * @returns Promise<StudentServiceCreateResponseInterface>
     */
    async update(params: Partial<StudentServiceCreateParamsInterface>): Promise<StudentServiceCreateResponseInterface> {
        // await new RequestBuilder()
        //     .method('post')
        //     .url('user/new')
        //     .data(params)
        //     .send()
        return Promise.resolve({} as StudentServiceCreateResponseInterface)
    }

    /**
     * Delete a certain user
     * @param {string} id
     * @returns Promise<StudentServiceCreateResponseInterface>
     */
    async delete(id: string): Promise<StudentServiceCreateResponseInterface> {
        // await new RequestBuilder()
        //     .method('post')
        //     .url('user/new')
        //     .data(params)
        //     .send()
        return Promise.resolve({} as StudentServiceCreateResponseInterface)
    }
}

export default StudentService
