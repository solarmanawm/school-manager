import {DatabaseInterface} from "./AbstractDatabase";
import {RouterInterface} from "./AbstractRouter";
import AbstractModule from "./AbstractModule";
import UserController, {UserControllerInterface} from "./UserController";
import UserRouter from "./UserRouter";

/**
 * User Module Class
 * @extends AbstractModule
 */
class UserModule extends AbstractModule {
    /**
     * The user module's factory method
     * @param {DatabaseInterface} database A database
     * @protected
     */
    protected factory(database: DatabaseInterface): RouterInterface {
        const controller: UserControllerInterface = new UserController(database);
        return new UserRouter(controller, 'user');
    }
}

export default UserModule
