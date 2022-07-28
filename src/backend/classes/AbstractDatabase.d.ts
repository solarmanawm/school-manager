import { DatabaseAuthServiceInterface } from './AbstractAuthService';
import { DatabaseUserServiceInterface } from "./AbstractUserService";
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
declare abstract class AbstractDatabase implements DatabaseInterface {
    protected authService: DatabaseAuthServiceInterface;
    protected userService: DatabaseUserServiceInterface;
    /**
     * The factory method
     * @abstract
     * @protected
     */
    protected abstract factory(): void;
    /**
     * The Constructor
     * @constructor
     */
    constructor();
    /**
     * The Auth service getter
     */
    get auth(): DatabaseAuthServiceInterface;
    /**
     * The User service getter
     */
    get user(): DatabaseUserServiceInterface;
}
export default AbstractDatabase;
