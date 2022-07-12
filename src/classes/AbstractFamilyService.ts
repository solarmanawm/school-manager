import AbstractService from "./AbstractService";

/**
 * Student Service Create Params Interface
 */
export interface FamilyServiceCreateParamsInterface {
    id: string;
    sex: string;
    name: string;
    family: string;
    dateOfBirth?: string;
}

/**
 * Student Service Update Params Interface
 */
export interface FamilyServiceUpdateParamsInterface {
    from: FamilyServiceCreateParamsInterface,
    to: FamilyServiceCreateParamsInterface,
}

/**
 * Student Service Create Response Interface
 */
export interface FamilyServiceCreateResponseInterface {
}

/**
 * Student Service Interface
 */
export interface FamilyServiceInterface {
    create: (payload: FamilyServiceCreateParamsInterface) => Promise<FamilyServiceCreateResponseInterface>;
    update: (payload: FamilyServiceUpdateParamsInterface) => Promise<FamilyServiceCreateResponseInterface>;
    delete: (id: string) => Promise<FamilyServiceCreateResponseInterface>;
}

/**
 * Abstract Student Service Class
 * @extends AbstractService
 * @implements FamilyServiceInterface
 */
abstract class AbstractStudentService extends AbstractService implements FamilyServiceInterface {
    /**
     * Create a new student
     * @param {FamilyServiceCreateParamsInterface} params
     * @abstract
     * @returns Promise<StudentServiceRegisterResponseInterface>
     */
    abstract create(params: FamilyServiceCreateParamsInterface): Promise<FamilyServiceCreateResponseInterface>;

    /**
     * Update a certain user
     * @param {FamilyServiceUpdateParamsInterface} params
     * @abstract
     * @returns Promise<StudentServiceRegisterResponseInterface>
     */
    abstract update(params: FamilyServiceUpdateParamsInterface): Promise<FamilyServiceCreateResponseInterface>;

    /**
     * Delete a certain user
     * @param {string} id
     * @abstract
     * @returns Promise<StudentServiceRegisterResponseInterface>
     */
    abstract delete(id: string): Promise<FamilyServiceCreateResponseInterface>;
}

export default AbstractStudentService
