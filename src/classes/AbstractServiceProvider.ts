import {AuthServiceInterface} from './AbstractAuthService'
import {UserServiceInterface} from './AbstractUserService'
import {StudentServiceInterface} from "./AbstractStudentService"
import {FamilyServiceInterface} from './AbstractFamilyService'

/**
 * Service Provider Interface
 */
export interface ServiceProviderInterface {
    auth: AuthServiceInterface;
    user: UserServiceInterface;
    student: StudentServiceInterface;
    family: FamilyServiceInterface;
}

/**
 * Abstract Service Provider Class
 * @implements ServiceProviderInterface
 */
abstract class AbstractServiceProvider implements ServiceProviderInterface {
    protected authService!: AuthServiceInterface
    protected userService!: UserServiceInterface
    protected studentService!: StudentServiceInterface
    protected familyService!: FamilyServiceInterface

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

    get student() {
        return this.studentService;
    }

    get family() {
        return this.familyService;
    }
}

export default AbstractServiceProvider
