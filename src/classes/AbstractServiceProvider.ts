import {AuthServiceInterface} from './AbstractAuthService'
import {UserServiceInterface} from './AbstractUserService'
import {StudentServiceInterface} from "./AbstractStudentService"
import {FamilyServiceInterface} from './AbstractFamilyService'
import {FeeServiceInterface} from "./AbstractFeeService";
import UserService from "./UserService";
import StudentService from "./StudentService";
import FamilyService from "./FamilyService";
import FeeService from "./FeeService";

/**
 * Service Provider Interface
 */
export interface ServiceProviderInterface {
    auth: AuthServiceInterface;
    user: UserServiceInterface;
    student: StudentServiceInterface;
    family: FamilyServiceInterface;
    fee: FeeServiceInterface;
}

/**
 * Abstract Service Provider Class
 * @implements ServiceProviderInterface
 */
abstract class AbstractServiceProvider implements ServiceProviderInterface {
    protected authService!: AuthServiceInterface
    private readonly userService!: UserServiceInterface
    private readonly studentService!: StudentServiceInterface
    private readonly familyService!: FamilyServiceInterface
    private readonly feeService!: FeeServiceInterface

    protected abstract factory(): void;

    constructor() {
        this.userService = new UserService(this)
        this.studentService = new StudentService(this)
        this.familyService = new FamilyService(this)
        this.feeService = new FeeService(this)
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

    get fee() {
        return this.feeService;
    }
}

export default AbstractServiceProvider
