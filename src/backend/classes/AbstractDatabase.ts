import {DatabaseAuthServiceInterface} from './AbstractAuthService'
import {DatabaseUserServiceInterface} from "./AbstractUserService";

/**
 * Database Interface
 */
export interface DatabaseInterface {
    auth: DatabaseAuthServiceInterface;
    user: DatabaseUserServiceInterface;
}

/**
 * Abstract Database Class
 * @implements DatabaseInterface
 */
abstract class AbstractDatabase implements DatabaseInterface {
    protected authService!: DatabaseAuthServiceInterface;
    protected userService!: DatabaseUserServiceInterface;

    /**
     * The factory method
     * @abstract
     * @protected
     */
    protected abstract factory(): void

    /**
     * The Constructor
     * @constructor
     */
    constructor() {
        this.factory();
    }

    /**
     * The Auth service getter
     */
    get auth() {
        return this.authService;
    }

    /**
     * The User service getter
     */
    get user() {
        return this.userService;
    }
}

export default AbstractDatabase;
