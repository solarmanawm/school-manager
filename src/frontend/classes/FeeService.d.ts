import { FeeServiceCreateResponseInterface, FeeServiceCreateParamsInterface } from "./AbstractFeeService";
import AbstractFeeService from "./AbstractFeeService";
declare class FeeService extends AbstractFeeService {
    /**
     * Create a new user
     * @param {FeeServiceCreateParamsInterface} params
     * @returns Promise<FeeServiceCreateResponseInterface>
     */
    create(params: FeeServiceCreateParamsInterface): Promise<FeeServiceCreateResponseInterface>;
    /**
     * Update a certain user
     * @param {Partial<FeeServiceCreateParamsInterface>} payload
     * @returns Promise<StudentServiceCreateResponseInterface>
     */
    update(payload: Partial<FeeServiceCreateParamsInterface>): Promise<FeeServiceCreateResponseInterface>;
    /**
     * Delete a certain user
     * @param {string} id
     * @returns Promise<StudentServiceCreateResponseInterface>
     */
    delete(id: string): Promise<FeeServiceCreateResponseInterface>;
}
export default FeeService;
