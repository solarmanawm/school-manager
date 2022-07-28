import { UserServiceRegisterResponseInterface, UserServiceRegisterParamsInterface } from "./AbstractUserService";
import AbstractUserService from "./AbstractUserService";
declare class UserService extends AbstractUserService {
    /**
     * Create a new user
     * @param {UserServiceRegisterParamsInterface} params
     * @returns Promise<UserServiceRegisterResponseInterface>
     * @protected
     */
    create(params: UserServiceRegisterParamsInterface): Promise<UserServiceRegisterResponseInterface>;
}
export default UserService;
