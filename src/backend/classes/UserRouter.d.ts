import AbstractRouter from "./AbstractRouter";
import { UserControllerInterface } from "./UserController";
/**
 * User Router Class
 * @extends AbstractRouter<UserControllerInterface>
 */
declare class UserRouter extends AbstractRouter<UserControllerInterface> {
    /**
     * Assign routes
     * @param {UserControllerInterface} controller The user controller
     * @protected
     */
    protected assignRoutes(controller: UserControllerInterface): void;
}
export default UserRouter;
