import AbstractService from "./AbstractService";

/**
 * Student Service Create Params Interface
 */
export interface FamilyServiceCreateParamsInterface {
    id: string;
    name: string;
    fees: string[];
}

/**
 * Student Service Update Params Interface
 */
export interface FamilyServiceUpdateParamsInterface {
    error: Error;
    item: FamilyServiceCreateResponseInterface;
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
    update: (payload: Partial<FamilyServiceCreateParamsInterface>) => Promise<FamilyServiceCreateResponseInterface>;
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
     * @returns Promise<FamilyServiceCreateResponseInterface>
     */
    abstract create(params: FamilyServiceCreateParamsInterface): Promise<FamilyServiceCreateResponseInterface>;

    /**
     * Update a certain user
     * @param {Partial<FamilyServiceCreateParamsInterface>} payload
     * @abstract
     * @returns Promise<FamilyServiceCreateResponseInterface>
     */
    abstract update(payload: Partial<FamilyServiceCreateParamsInterface>): Promise<FamilyServiceCreateResponseInterface>;

    /**
     * Delete a certain user
     * @param {string} id
     * @abstract
     * @returns Promise<FamilyServiceCreateResponseInterface>
     */
    abstract delete(id: string): Promise<FamilyServiceCreateResponseInterface>;
}

export default AbstractStudentService
