import {StudentServiceCreateParamsInterface, StudentServiceCreateResponseInterface} from "./AbstractStudentService";
import AbstractStudentService from "./AbstractStudentService"
// import RequestBuilder from "./RequestBuilder";

class FirebaseStudentService extends AbstractStudentService {
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
}

export default FirebaseStudentService
