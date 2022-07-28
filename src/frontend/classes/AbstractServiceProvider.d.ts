import { AuthServiceInterface } from './AbstractAuthService';
import { UserServiceInterface } from './AbstractUserService';
import { StudentServiceInterface } from "./AbstractStudentService";
import { FamilyServiceInterface } from './AbstractFamilyService';
import { FeeServiceInterface } from "./AbstractFeeService";
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
declare abstract class AbstractServiceProvider implements ServiceProviderInterface {
    protected authService: AuthServiceInterface;
    private readonly userService;
    private readonly studentService;
    private readonly familyService;
    private readonly feeService;
    protected abstract factory(): void;
    constructor();
    get auth(): AuthServiceInterface;
    get user(): UserServiceInterface;
    get student(): StudentServiceInterface;
    get family(): FamilyServiceInterface;
    get fee(): FeeServiceInterface;
}
export default AbstractServiceProvider;
