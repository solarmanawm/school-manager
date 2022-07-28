import { FamilyInterface, FamilyServiceCreateResponseInterface } from "./AbstractFamilyService";
import AbstractFamilyService from "./AbstractFamilyService";
declare class FamilyService extends AbstractFamilyService {
    /**
     * Create a new user
     * @param {FamilyInterface} params
     * @returns Promise<FamilyServiceCreateResponseInterface>
     */
    create(params: FamilyInterface): Promise<FamilyServiceCreateResponseInterface>;
    /**
     * Update a certain user
     * @param {Partial<FamilyInterface>} payload
     * @returns Promise<FamilyServiceCreateResponseInterface>
     */
    update(payload: Partial<FamilyInterface>): Promise<FamilyServiceCreateResponseInterface>;
    /**
     * Delete a certain user
     * @param {string} id
     * @returns Promise<FamilyServiceCreateResponseInterface>
     */
    delete(id: string): Promise<FamilyServiceCreateResponseInterface>;
    /**
     * Add an income amount.
     * @param {string} id
     * @param {number} amount
     * @returns Promise<void>
     */
    income(id: string, amount: number): Promise<void>;
    /**
     * Add an income.
     * @param {string} id
     * @returns Promise<void>
     */
    resetIncome(id: string): Promise<void>;
}
export default FamilyService;
