/**
 * Database Auth Service Interface
 */
export interface DatabaseAuthServiceInterface {
    decodeToken(token: string): Promise<{
        success: boolean;
        details: object;
    }>;
}
/**
 * Abstract Auth Service Class
 * @implements DatabaseAuthServiceInterface
 */
declare abstract class AbstractAuthService implements DatabaseAuthServiceInterface {
    /**
     * Decode access token
     * @param {string} token A token to decode
     */
    abstract decodeToken(token: string): Promise<{
        success: boolean;
        details: object;
    }>;
}
export default AbstractAuthService;
