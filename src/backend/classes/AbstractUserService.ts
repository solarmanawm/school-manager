/**
 * Create User Params Interface
 */
export interface CreateUserParamsInterface {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: string;
}

/**
 * User Service Response Interface
 */
export interface UserServiceResponseInterface {
    success: boolean;
    user: object;
}

/**
 * Database User Service Interface
 */
export interface DatabaseUserServiceInterface {
    createUser(params: CreateUserParamsInterface): Promise<UserServiceResponseInterface>;
    currentUser(id: string): Promise<UserServiceResponseInterface>;
}

/**
 * Abstract User Service Class
 * @implements DatabaseUserServiceInterface
 */
abstract class AbstractUserService implements DatabaseUserServiceInterface {
    /**
     * Create a new user
     * @param {CreateUserParamsInterface} params
     */
    abstract createUser(params: CreateUserParamsInterface): Promise<UserServiceResponseInterface>

    /**
     * Get the current user information
     * @param {string} id A current user identifier
     */
    abstract currentUser(id: string): Promise<UserServiceResponseInterface>
}

export default AbstractUserService
