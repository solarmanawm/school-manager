import {Auth} from 'firebase-admin/auth'

import {DatabaseInterface} from "./AbstractDatabase";
import AbstractAuthService from "./AbstractAuthService";

/**
 * Firebase Auth Class
 * @extends AbstractAuthService
 */
class FirebaseAuthService extends AbstractAuthService {
    /**
     * @constructor
     * @param {DatabaseInterface} firebase Firebase
     * @param {Auth} auth The firebase auth service
     */
    constructor(private firebase: DatabaseInterface, private auth: Auth) {
        super();
    }

    /**
     * Decode access token
     * @param {string} token A token to decode
     */
    async decodeToken(token: string) {
        const details = await this.auth.verifyIdToken(token);
        return {
            success: true,
            details,
        }
    }
}

export default FirebaseAuthService
