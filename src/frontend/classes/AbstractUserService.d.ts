import AbstractService from "./AbstractService";
/**
 * User Service Register Params Interface
 */
export interface UserServiceRegisterParamsInterface {
    username: string;
    password: string;
    role?: string;
    firstName?: string;
    lastName?: string;
}
/**
 * User Service Register Response Interface
 */
export interface UserServiceRegisterResponseInterface {
    uid: string;
    role: string;
    firstName: string;
    lastName: string;
    accessToken: string;
    refreshToken: string;
}
/**
 * User Service Interface
 */
export interface UserServiceInterface {
    create: (payload: UserServiceRegisterParamsInterface) => Promise<UserServiceRegisterResponseInterface>;
}
/**
 * Abstract User Service Class
 * @extends AbstractService
 * @implements UserServiceInterface
 */
declare abstract class AbstractUserService extends AbstractService implements UserServiceInterface {
    /**
     * Create a new user
     * @param {UserServiceRegisterParamsInterface} params
     * @protected
     * @abstract
     * @returns Promise<void>
     */
    abstract create(params: UserServiceRegisterParamsInterface): Promise<UserServiceRegisterResponseInterface>;
}
export default AbstractUserService;
