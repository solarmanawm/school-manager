import {RequestHandler, NextFunction, Request, Response} from "express";
import Controller, {ControllerInterface} from "./Controller";

/**
 * User Controller Interface
 * @extends ControllerInterface
 */
export interface UserControllerInterface extends ControllerInterface {
    createUser: RequestHandler;
    getCurrentUser: RequestHandler;
}

/**
 * User Controller Class
 * @extends Controller
 * @implements UserControllerInterface
 */
class UserController extends Controller implements UserControllerInterface {
    /**
     * A create new user controller
     * @param {Request} req
     * @param {Response} res
     * @param {NextFunction} next
     */
    async createUser(req: Request, res: Response, next: NextFunction) {
        try {
            const {body: {username: email, password, firstName = '', lastName = '', role = 'user'}} = req;
            const response = await this.database.user.createUser({
                email,
                password,
                firstName,
                lastName,
                role,
            });
            return res.status(200).send(response);
        } catch (error) {
            return next(error)
        }
    }

    /**
     * A controller to retrieve the current user information
     * @param {Request} req A request
     * @param {Response} res A response
     * @param {NextFunction} next A next function
     */
    getCurrentUser(req: Request, res: Response, next: NextFunction) {
        try {
            const {uid} = res.locals;
            const response = this.database.user.currentUser(uid);
            res.status(200).send(response);
        } catch (error) {
            return next(error)
        }
    }
}

export default UserController
