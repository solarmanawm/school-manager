import AbstractService from "./AbstractService";

/**
 * Student Service Create Params Interface
 */
export interface StudentServiceCreateParamsInterface {
    id: string;
    sex: string;
    firstName: string;
    lastName: string;
    patronymic?: string;
    dateOfBirth?: string;
}

/**
 * Student Service Update Params Interface
 */
export interface StudentServiceUpdateParamsInterface {
    from: StudentServiceCreateParamsInterface,
    to: StudentServiceCreateParamsInterface,
}

/**
 * Student Service Create Response Interface
 */
export interface StudentServiceCreateResponseInterface {
}

/**
 * Student Service Interface
 */
export interface StudentServiceInterface {
    create: (payload: StudentServiceCreateParamsInterface) => Promise<StudentServiceCreateResponseInterface>;
    update: (payload: StudentServiceUpdateParamsInterface) => Promise<StudentServiceCreateResponseInterface>;
    delete: (id: string) => Promise<StudentServiceCreateResponseInterface>;
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

    /**
     * Update a certain user
     * @param {StudentServiceUpdateParamsInterface} params
     * @abstract
     * @returns Promise<StudentServiceRegisterResponseInterface>
     */
    abstract update(params: StudentServiceUpdateParamsInterface): Promise<StudentServiceCreateResponseInterface>;

    /**
     * Delete a certain user
     * @param {string} id
     * @abstract
     * @returns Promise<StudentServiceRegisterResponseInterface>
     */
    abstract delete(id: string): Promise<StudentServiceCreateResponseInterface>;
}

export default AbstractStudentService
