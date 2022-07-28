import AbstractRouter from "./AbstractRouter";
import { AuthControllerInterface } from "./AuthController";
/**
 * Auth Router Class
 * @extends AbstractRouter<AuthControllerInterface>
 */
declare class AuthRouter extends AbstractRouter<AuthControllerInterface> {
    /**
     * Assign routes
     * @param {AuthControllerInterface} controller The auth controller
     * @protected
     */
    protected assignRoutes(controller: AuthControllerInterface): void;
}
export default AuthRouter;
