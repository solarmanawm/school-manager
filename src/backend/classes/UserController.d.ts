import { RequestHandler, NextFunction, Request, Response } from "express";
import Controller, { ControllerInterface } from "./Controller";
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
declare class UserController extends Controller implements UserControllerInterface {
    /**
     * A create new user controller
     * @param {Request} req
     * @param {Response} res
     * @param {NextFunction} next
     */
    createUser(req: Request, res: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>>;
    /**
     * A controller to retrieve the current user information
     * @param {Request} req A request
     * @param {Response} res A response
     * @param {NextFunction} next A next function
     */
    getCurrentUser(req: Request, res: Response, next: NextFunction): void;
}
export default UserController;
