import AbstractService from "./AbstractService";
/**
 * Family Service Create Params Interface
 */
export interface FamilyServiceCreateParamsInterface {
    id: string;
    name: string;
    income: number;
    createdAt: string;
    description: string;
    fees: string[];
}
/**
 * Family Item Interface
 */
export declare type FamilyInterface = Pick<FamilyServiceCreateParamsInterface, 'id' | 'name' | 'fees' | 'description'>;
/**
 * Family Service Create Response Interface
 */
export interface FamilyServiceCreateResponseInterface {
}
/**
 * Family Service Interface
 */
export interface FamilyServiceInterface {
    create: (payload: FamilyInterface) => Promise<FamilyServiceCreateResponseInterface>;
    update: (payload: Partial<FamilyInterface>) => Promise<FamilyServiceCreateResponseInterface>;
    delete: (id: string) => Promise<FamilyServiceCreateResponseInterface>;
    income: (id: string, amount: number) => Promise<void>;
    resetIncome: (id: string) => Promise<void>;
}
/**
 * Abstract Family Service Class
 * @extends AbstractService
 * @implements FamilyServiceInterface
 */
declare abstract class AbstractFamilyService extends AbstractService implements FamilyServiceInterface {
    /**
     * Create a new Family
     * @param {FamilyInterface} params
     * @abstract
     * @returns Promise<FamilyServiceCreateResponseInterface>
     */
    abstract create(params: FamilyInterface): Promise<FamilyServiceCreateResponseInterface>;
    /**
     * Update a certain user
     * @param {Partial<FamilyInterface>} payload
     * @abstract
     * @returns Promise<FamilyServiceCreateResponseInterface>
     */
    abstract update(payload: Partial<FamilyInterface>): Promise<FamilyServiceCreateResponseInterface>;
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
    /**
     * Add an income.
     * @param {string} id
     * @abstract
     * @returns Promise<void>
     */
    abstract resetIncome(id: string): Promise<void>;
}
export default AbstractFamilyService;
