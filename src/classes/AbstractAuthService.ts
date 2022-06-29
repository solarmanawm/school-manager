import {Auth} from 'firebase/auth'
import AbstractService from './AbstractService'
import {ServiceProviderInterface} from "./AbstractServiceProvider";

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
    uid: string,
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
abstract class AbstractAuthService extends AbstractService implements AuthServiceInterface {
    /**
     * @constructor
     * @param {ServiceProviderInterface} service
     * @param {Auth} auth
     */
    constructor(protected service: ServiceProviderInterface, protected auth: Auth) {
        super(service)
    }

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

export default AbstractAuthService
