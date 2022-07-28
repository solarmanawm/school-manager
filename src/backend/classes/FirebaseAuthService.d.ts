import { Auth } from 'firebase-admin/auth';
import { DatabaseInterface } from "./AbstractDatabase";
import AbstractAuthService from "./AbstractAuthService";
/**
 * Firebase Auth Class
 * @extends AbstractAuthService
 */
declare class FirebaseAuthService extends AbstractAuthService {
    private firebase;
    private auth;
    /**
     * @constructor
     * @param {DatabaseInterface} firebase Firebase
     * @param {Auth} auth The firebase auth service
     */
    constructor(firebase: DatabaseInterface, auth: Auth);
    /**
     * Decode access token
     * @param {string} token A token to decode
     */
    decodeToken(token: string): Promise<{
        success: boolean;
        details: import("firebase-admin/auth").DecodedIdToken;
    }>;
}
export default FirebaseAuthService;
