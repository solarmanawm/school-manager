import AbstractService from "./AbstractService";

/**
 * Student Service Create Params Interface
 */
export interface StudentServiceCreateParamsInterface {}

/**
 * Student Service Create Response Interface
 */
export interface StudentServiceCreateResponseInterface {
    id: string;
    firstName: string;
    lastName: string;
    fatherName?: string;
    dateOfBirth?: string;
}

/**
 * Student Service Interface
 */
export interface StudentServiceInterface {
    create: (payload: StudentServiceCreateParamsInterface) => Promise<StudentServiceCreateResponseInterface>;
}

/**
 * Abstract Student Service Class
 * @extends AbstractService
 * @implements StudentServiceInterface
 */
abstract class AbstractStudentService extends AbstractService implements StudentServiceInterface {
    /**
     * Create a new student
     * @param {StudentServiceCreateParamsInterface} params
     * @abstract
     * @returns Promise<StudentServiceRegisterResponseInterface>
     */
    abstract create(params: StudentServiceCreateParamsInterface): Promise<StudentServiceCreateResponseInterface>;
}

export default AbstractStudentService
