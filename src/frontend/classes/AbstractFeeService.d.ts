import AbstractService from "./AbstractService";
/**
 * Fee Service Create Params Interface
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
 * Fee Service Create Response Interface
 */
export interface FeeServiceCreateResponseInterface {
    error: Error;
    item: FeeServiceCreateParamsInterface;
}
/**
 * Fee Service Interface
 */
export interface FeeServiceInterface {
    create: (payload: FeeServiceCreateParamsInterface) => Promise<FeeServiceCreateResponseInterface>;
    update: (payload: Partial<FeeServiceCreateParamsInterface>) => Promise<FeeServiceCreateResponseInterface>;
    delete: (id: string) => Promise<FeeServiceCreateResponseInterface>;
}
/**
 * Abstract Fee Service Class
 * @extends AbstractService
 * @implements FeeServiceInterface
 */
declare abstract class AbstractFeeService extends AbstractService implements FeeServiceInterface {
    /**
     * Create a new Fee
     * @param {FeeServiceCreateParamsInterface} params
     * @abstract
     * @returns Promise<FeeServiceCreateResponseInterface>
     */
    abstract create(params: FeeServiceCreateParamsInterface): Promise<FeeServiceCreateResponseInterface>;
    /**
     * Update a certain user
     * @param {Partial<FeeServiceCreateParamsInterface>} payload
     * @abstract
     * @returns Promise<FeeServiceCreateResponseInterface>
     */
    abstract update(payload: Partial<FeeServiceCreateParamsInterface>): Promise<FeeServiceCreateResponseInterface>;
    /**
     * Delete a certain user
     * @param {string} id
     * @abstract
     * @returns Promise<FeeServiceCreateResponseInterface>
     */
    abstract delete(id: string): Promise<FeeServiceCreateResponseInterface>;
}
export default AbstractFeeService;
