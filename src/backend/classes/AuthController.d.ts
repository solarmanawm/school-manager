import { RequestHandler, Request, Response, NextFunction } from 'express';
import Controller, { ControllerInterface } from "./Controller";
/**
 * Auth Controller Interface
 * @extends ControllerInterface
 */
export interface AuthControllerInterface extends ControllerInterface {
    login: RequestHandler;
    logout: RequestHandler;
    decodeAccessToken: RequestHandler;
}
/**
 * Auth Controller Class
 * @extends Controller
 * @implements AuthControllerInterface
 */
declare class AuthController extends Controller implements AuthControllerInterface {
    /**
     * The login controller
     * @param {Request} req A request
     * @param {Response} res A response
     * @param {NextFunction} next A next function
     */
    login(req: Request, res: Response, next: NextFunction): Promise<void>;
    /**
     * The logout controller
     * @param {Request} req A request
     * @param {Response} res A response
     * @param {NextFunction} next A next function
     */
    logout(req: Request, res: Response, next: NextFunction): Promise<void>;
    /**
     * Decode an access token item
     * @param {Request} req A request
     * @param {Response} res A response
     * @param {NextFunction} next A next function
     */
    decodeAccessToken(req: Request, res: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>>;
}
export default AuthController;
