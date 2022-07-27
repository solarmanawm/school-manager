import {StudentServiceCreateParamsInterface, StudentServiceCreateResponseInterface} from "./AbstractStudentService";
import AbstractStudentService from "./AbstractStudentService"
import RequestBuilder from "./RequestBuilder";
import {useDataStore} from "../store/data";
import {Helpers} from "../helpers";

class StudentService extends AbstractStudentService {
    /**
     * Create a new user
     * @param {StudentServiceCreateParamsInterface} params
     * @returns Promise<StudentServiceCreateResponseInterface>
     */
    async create(params: StudentServiceCreateParamsInterface): Promise<StudentServiceCreateResponseInterface> {
        return new RequestBuilder()
            .method('post')
            .url('user/new')
            .data(params)
            .mock<StudentServiceCreateParamsInterface>(true)
            .then(({error}) => {
                if (error) {
                    throw error
                }

                const dataStore = useDataStore()
                const id = (Math.random() + 1).toString(36).substring(7)
                dataStore.addStudent({
                    ...params,
                    id,
                })

                return Promise.resolve({} as StudentServiceCreateResponseInterface)
            })
    }

    /**
     * Update a certain user
     * @param {Partial<StudentServiceCreateParamsInterface>} payload
     * @returns Promise<StudentServiceCreateResponseInterface>
     */
    async update(payload: Partial<StudentServiceCreateParamsInterface>): Promise<StudentServiceCreateResponseInterface> {
        const dataStore = useDataStore()
        const diff = Helpers.difference<StudentServiceCreateParamsInterface>(dataStore.getStudentById(payload.id as string) as StudentServiceCreateParamsInterface, payload)

        if (Object.keys(diff).length === 0) {
            return Promise.resolve({} as StudentServiceCreateResponseInterface)
        }

        return new RequestBuilder()
            .method('post')
            .url('user/new')
            .data(diff)
            .mock<StudentServiceCreateParamsInterface>(true)
            .then(({error}) => {
                if (error) {
                    throw error
                }

                const {id} = payload
                const {family} = diff
                dataStore.updateStudent(id as string, diff)

                if (family) {
                    //...
                }

                return Promise.resolve({} as StudentServiceCreateResponseInterface)
            })
    }

    /**
     * Delete a certain user
     * @param {string} id
     * @returns Promise<StudentServiceCreateResponseInterface>
     */
    async delete(id: string): Promise<StudentServiceCreateResponseInterface> {
        return new RequestBuilder()
            .method('post')
            .url('user/new')
            .data({id})
            .mock<StudentServiceCreateParamsInterface>(true)
            .then(({error}) => {
                if (error) {
                    throw error
                }

                const dataStore = useDataStore()
                dataStore.removeStudent(id)

                return Promise.resolve({} as StudentServiceCreateResponseInterface)
            })
    }
}

export default StudentService
