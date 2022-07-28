import { Auth } from 'firebase-admin/auth';
import AbstractUserService, { DatabaseUserServiceInterface } from "./AbstractUserService";
import { DatabaseInterface } from "./AbstractDatabase";
import { CreateUserParamsInterface, UserServiceResponseInterface } from "./AbstractUserService";
/**
 * Firebase User Service Class
 * @extends AbstractUserService
 * @implements DatabaseUserServiceInterface
 */
declare class FirebaseUserService extends AbstractUserService implements DatabaseUserServiceInterface {
    private firebase;
    private auth;
    /**
     * @constructor
     * @param {DatabaseInterface} firebase Firebase
     * @param {Auth} auth The firebase auth service
     */
    constructor(firebase: DatabaseInterface, auth: Auth);
    /**
     * Create a new user
     * @param {CreateUserParamsInterface} params A user role
     */
    createUser(params: CreateUserParamsInterface): Promise<UserServiceResponseInterface>;
    /**
     * Get the current user information
     * @param {string} id A current user identifier
     */
    currentUser(id: string): Promise<UserServiceResponseInterface>;
}
export default FirebaseUserService;
