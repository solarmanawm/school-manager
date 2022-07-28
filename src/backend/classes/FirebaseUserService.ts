import {Auth} from 'firebase-admin/auth'

import AbstractUserService, {DatabaseUserServiceInterface} from "./AbstractUserService";
import {DatabaseInterface} from "./AbstractDatabase";
import {CreateUserParamsInterface, UserServiceResponseInterface} from "./AbstractUserService";

/**
 * Firebase User Service Class
 * @extends AbstractUserService
 * @implements DatabaseUserServiceInterface
 */
class FirebaseUserService extends AbstractUserService implements DatabaseUserServiceInterface {
    /**
     * @constructor
     * @param {DatabaseInterface} firebase Firebase
     * @param {Auth} auth The firebase auth service
     */
    constructor(private firebase: DatabaseInterface, private auth: Auth) {
        super();
    }

    /**
     * Create a new user
     * @param {CreateUserParamsInterface} params A user role
     */
    async createUser(params: CreateUserParamsInterface): Promise<UserServiceResponseInterface> {
        const {email, password, role, firstName, lastName} = params;
        const user = await this.auth.createUser({
            email,
            password,
        });
        const {uid} = user;
        await this.auth.setCustomUserClaims(uid, {
            role,
            firstName,
            lastName,
            emailVerified: false,
            disabled: false,
        });
        return {
            success: true,
            user,
        };
    }

    /**
     * Get the current user information
     * @param {string} id A current user identifier
     */
    async currentUser(id: string): Promise<UserServiceResponseInterface> {
        const user = await this.auth.getUser(id);
        return {
            success: true,
            user,
        };
    }
}

export default FirebaseUserService
