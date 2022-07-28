import {DatabaseInterface} from "./AbstractDatabase";
import {RouterInterface} from "./AbstractRouter";
import AbstractModule from "./AbstractModule";
import AuthController, {AuthControllerInterface} from "./AuthController";
import AuthRouter from "./AuthRouter";

/**
 * Auth Module Class
 * @extends AbstractModule
 */
class AuthModule extends AbstractModule {
    /**
     * The auth module's factory method
     * @param database
     * @protected
     */
    protected factory(database: DatabaseInterface): RouterInterface {
        const controller: AuthControllerInterface = new AuthController(database);
        return new AuthRouter(controller, 'auth');
    }
}

export default AuthModule
