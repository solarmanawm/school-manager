import { DatabaseInterface } from "./AbstractDatabase";
import { RouterInterface } from "./AbstractRouter";
import AbstractModule from "./AbstractModule";
/**
 * Auth Module Class
 * @extends AbstractModule
 */
declare class AuthModule extends AbstractModule {
    /**
     * The auth module's factory method
     * @param database
     * @protected
     */
    protected factory(database: DatabaseInterface): RouterInterface;
}
export default AuthModule;
