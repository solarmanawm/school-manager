import { Auth } from 'firebase/auth';
import AbstractService from './AbstractService';
import { ServiceProviderInterface } from "./AbstractServiceProvider";
/**
 * Auth Service Login Params Interface
 */
export interface AuthServiceLoginParamsInterface {
    username: string;
    password: string;
}
/**
 * Auth Service Login Response Interface
 */
export interface AuthServiceLoginResponseInterface {
    uid: string;
    role: string;
    firstName: string;
    lastName: string;
    accessToken: string;
    refreshToken: string;
}
/**
 * Auth Service Interface
 */
export interface AuthServiceInterface {
    login: (params: AuthServiceLoginParamsInterface) => Promise<AuthServiceLoginResponseInterface>;
    logout: () => Promise<void>;
}
/**
 * Abstract Auth Service Class
 * @extends AbstractService
 * @implements AuthServiceInterface
 */
declare abstract class AbstractAuthService extends AbstractService implements AuthServiceInterface {
    protected service: ServiceProviderInterface;
    protected auth: Auth;
    /**
     * @constructor
     * @param {ServiceProviderInterface} service
     * @param {Auth} auth
     */
    constructor(service: ServiceProviderInterface, auth: Auth);
    /**
     * User login
     * @param {AuthServiceLoginParamsInterface} params
     * @returns Promise<pb.LoginResponse>
     * @abstract
     * @protected
     */
    abstract login(params: AuthServiceLoginParamsInterface): Promise<AuthServiceLoginResponseInterface>;
    /**
     * User logout
     * @returns Promise<void>
     * @abstract
     * @protected
     */
    abstract logout(): Promise<void>;
}
export default AbstractAuthService;
