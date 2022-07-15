import AbstractService from "./AbstractService";

/**
 * Student Service Create Params Interface
 */
export interface FeeServiceCreateParamsInterface {
    id: string;
    name: string;
    value: string;
    completed: boolean;
    description: string;
    families: string[];
}

/**
 * Student Service Update Params Interface
 */
export interface FeeServiceUpdateParamsInterface {
    from: FeeServiceCreateParamsInterface,
    to: FeeServiceCreateParamsInterface,
}

/**
 * Student Service Create Response Interface
 */
export interface FeeServiceCreateResponseInterface {
    error: Error;
    item: FeeServiceCreateParamsInterface;
}

/**
 * Student Service Interface
 */
export interface FeeServiceInterface {
    create: (payload: FeeServiceCreateParamsInterface) => Promise<FeeServiceCreateResponseInterface>;
    update: (payload: FeeServiceUpdateParamsInterface) => Promise<FeeServiceCreateResponseInterface>;
    delete: (id: string) => Promise<FeeServiceCreateResponseInterface>;
}

/**
 * Abstract Student Service Class
 * @extends AbstractService
 * @implements FeeServiceInterface
 */
abstract class AbstractFeeService extends AbstractService implements FeeServiceInterface {
    /**
     * Create a new student
     * @param {FeeServiceCreateParamsInterface} params
     * @abstract
     * @returns Promise<FeeServiceCreateResponseInterface>
     */
    abstract create(params: FeeServiceCreateParamsInterface): Promise<FeeServiceCreateResponseInterface>;

    /**
     * Update a certain user
     * @param {FeeServiceUpdateParamsInterface} params
     * @abstract
     * @returns Promise<FeeServiceCreateResponseInterface>
     */
    abstract update(params: FeeServiceUpdateParamsInterface): Promise<FeeServiceCreateResponseInterface>;

    /**
     * Delete a certain user
     * @param {string} id
     * @abstract
     * @returns Promise<FeeServiceCreateResponseInterface>
     */
    abstract delete(id: string): Promise<FeeServiceCreateResponseInterface>;
}

export default AbstractFeeService
