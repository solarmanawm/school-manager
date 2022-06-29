import {AuthServiceInterface} from './AbstractAuthService'
import {UserServiceInterface} from './AbstractUserService'

/**
 * Service Provider Interface
 */
export interface ServiceProviderInterface {
    auth: AuthServiceInterface;
    user: UserServiceInterface;
}

/**
 * Abstract Service Provider Class
 * @implements ServiceProviderInterface
 */
abstract class AbstractServiceProvider implements ServiceProviderInterface {
    protected authService!: AuthServiceInterface
    protected userService!: UserServiceInterface

    protected abstract factory(): void;

    constructor() {
        this.factory();
    }

    get auth() {
        return this.authService;
    }

    get user() {
        return this.userService;
    }
}

export default AbstractServiceProvider
