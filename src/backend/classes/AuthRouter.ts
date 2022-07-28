import AbstractRouter from "./AbstractRouter";
import {AuthControllerInterface} from "./AuthController";

/**
 * Auth Router Class
 * @extends AbstractRouter<AuthControllerInterface>
 */
class AuthRouter extends AbstractRouter<AuthControllerInterface> {
    /**
     * Assign routes
     * @param {AuthControllerInterface} controller The auth controller
     * @protected
     */
    protected assignRoutes(controller: AuthControllerInterface) {
        this.router
            .post('/decodeAccessToken', controller.decodeAccessToken.bind(controller))
            .post('/login', controller.login.bind(controller))
            .get('/logout', controller.isAuthenticated.bind(controller), controller.logout.bind(controller));
    }
}

export default AuthRouter
