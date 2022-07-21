import AbstractService from "./AbstractService";

/**
 * Family Service Create Params Interface
 */
export interface FamilyServiceCreateParamsInterface {
    id: string;
    name: string;
    income: number;
    fees: string[];
}

/**
 * Family Item Interface
 */
export type FamilyInterface = Pick<FamilyServiceCreateParamsInterface, 'id' | 'name' | 'fees'>

/**
 * Family Service Update Params Interface
 */
export interface FamilyServiceUpdateParamsInterface {
    error: Error;
    item: FamilyServiceCreateResponseInterface;
}

/**
 * Family Service Create Response Interface
 */
export interface FamilyServiceCreateResponseInterface {
}

/**
 * Family Service Interface
 */
export interface FamilyServiceInterface {
    create: (payload: FamilyServiceCreateParamsInterface) => Promise<FamilyServiceCreateResponseInterface>;
    update: (payload: Partial<FamilyServiceCreateParamsInterface>) => Promise<FamilyServiceCreateResponseInterface>;
    delete: (id: string) => Promise<FamilyServiceCreateResponseInterface>;
    income: (id: string, amount: number) => Promise<void>;
}

/**
 * Abstract Family Service Class
 * @extends AbstractService
 * @implements FamilyServiceInterface
 */
abstract class AbstractFamilyService extends AbstractService implements FamilyServiceInterface {
    /**
     * Create a new Family
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

    /**
     * Add an income amount.
     * @param {string} id
     * @param {number} amount
     * @abstract
     * @returns Promise<void>
     */
    abstract income(id: string, amount: number): Promise<void>;
}

export default AbstractFamilyService
