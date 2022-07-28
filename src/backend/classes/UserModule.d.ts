import { DatabaseInterface } from "./AbstractDatabase";
import { RouterInterface } from "./AbstractRouter";
import AbstractModule from "./AbstractModule";
/**
 * User Module Class
 * @extends AbstractModule
 */
declare class UserModule extends AbstractModule {
    /**
     * The user module's factory method
     * @param {DatabaseInterface} database A database
     * @protected
     */
    protected factory(database: DatabaseInterface): RouterInterface;
}
export default UserModule;
