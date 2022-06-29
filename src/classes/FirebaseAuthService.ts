import {User, signInWithEmailAndPassword, signOut} from 'firebase/auth'

import {AuthServiceLoginParamsInterface, AuthServiceLoginResponseInterface} from "./AbstractAuthService";
import AbstractAuthService from "./AbstractAuthService";
import RequestBuilder from "./RequestBuilder";

/**
 * Decode Access Token Request Interface
 */
interface DecodeAccessTokenRequestInterface {
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
class FirebaseAuthService extends AbstractAuthService {
    /**
     * User login
     * @param {string} username
     * @param {string} password
     * @returns Promise<pb.LoginResponse>
     * @protected
     */
    async login({username, password}: AuthServiceLoginParamsInterface): Promise<AuthServiceLoginResponseInterface> {
        const userCredential = await signInWithEmailAndPassword(this.auth, username, password)
        const {accessToken, refreshToken} = userCredential.user as User & { accessToken: string; }
        const response = await new RequestBuilder<DecodeAccessTokenRequestInterface>()
            .method('post')
            .url('auth/decodeAccessToken')
            .data({accessToken})
            .send()
        const {data: {details: {firstName, lastName, role, uid}}} = response
        return {
            firstName,
            lastName,
            role,
            uid,
            accessToken,
            refreshToken,
        }
    }

    /**
     * User logout
     * @returns Promise<void>
     * @protected
     */
    async logout(): Promise<void> {
        await signOut(this.auth)
    }
}

export default FirebaseAuthService
