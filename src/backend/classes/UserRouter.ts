import AbstractRouter from "./AbstractRouter";
import {UserControllerInterface} from "./UserController";

/**
 * User Router Class
 * @extends AbstractRouter<UserControllerInterface>
 */
class UserRouter extends AbstractRouter<UserControllerInterface> {
    /**
     * Assign routes
     * @param {UserControllerInterface} controller The user controller
     * @protected
     */
    protected assignRoutes(controller: UserControllerInterface) {
        this.router
            .post('/new', controller.createUser.bind(controller))
            .get('/current', controller.isAuthenticated.bind(controller), controller.getCurrentUser.bind(controller));
    }
}

export default UserRouter
