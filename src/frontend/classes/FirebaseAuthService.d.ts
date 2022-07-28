import { AuthServiceLoginParamsInterface, AuthServiceLoginResponseInterface } from "./AbstractAuthService";
import AbstractAuthService from "./AbstractAuthService";
/**
 * Decode Access Token Request Interface
 */
export interface DecodeAccessTokenRequestInterface {
    details: {
        firstName: string;
        lastName: string;
        uid: string;
        role: string;
    };
}
/**
 * Firebase Auth Service Class
 * @extends AbstractAuthService
 */
declare class FirebaseAuthService extends AbstractAuthService {
    /**
     * User login
     * @param {string} username
     * @param {string} password
     * @returns Promise<pb.LoginResponse>
     * @protected
     */
    login({ username, password }: AuthServiceLoginParamsInterface): Promise<AuthServiceLoginResponseInterface>;
    /**
     * User logout
     * @returns Promise<void>
     * @protected
     */
    logout(): Promise<void>;
}
export default FirebaseAuthService;
