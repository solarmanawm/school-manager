import { StudentServiceCreateParamsInterface, StudentServiceCreateResponseInterface } from "./AbstractStudentService";
import AbstractStudentService from "./AbstractStudentService";
declare class StudentService extends AbstractStudentService {
    /**
     * Create a new user
     * @param {StudentServiceCreateParamsInterface} params
     * @returns Promise<StudentServiceCreateResponseInterface>
     */
    create(params: StudentServiceCreateParamsInterface): Promise<StudentServiceCreateResponseInterface>;
    /**
     * Update a certain user
     * @param {Partial<StudentServiceCreateParamsInterface>} payload
     * @returns Promise<StudentServiceCreateResponseInterface>
     */
    update(payload: Partial<StudentServiceCreateParamsInterface>): Promise<StudentServiceCreateResponseInterface>;
    /**
     * Delete a certain user
     * @param {string} id
     * @returns Promise<StudentServiceCreateResponseInterface>
     */
    delete(id: string): Promise<StudentServiceCreateResponseInterface>;
}
export default StudentService;
