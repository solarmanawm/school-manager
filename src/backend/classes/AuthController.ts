import {RequestHandler, Request, Response, NextFunction} from 'express'
import Controller, {ControllerInterface} from "./Controller";

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
class AuthController extends Controller implements AuthControllerInterface {
    /**
     * The login controller
     * @param {Request} req A request
     * @param {Response} res A response
     * @param {NextFunction} next A next function
     */
    async login(req: Request, res: Response, next: NextFunction) {}

    /**
     * The logout controller
     * @param {Request} req A request
     * @param {Response} res A response
     * @param {NextFunction} next A next function
     */
    async logout(req: Request, res: Response, next: NextFunction) {}

    /**
     * Decode an access token item
     * @param {Request} req A request
     * @param {Response} res A response
     * @param {NextFunction} next A next function
     */
    async decodeAccessToken(req: Request, res: Response, next: NextFunction) {
        const {body: {accessToken}} = req;
        try {
            const {details} = await this.database.auth.decodeToken(accessToken)
            return res.status(200).send({
                success: true,
                details,
            });
        } catch (error) {
            return next(error);
        }
    }
}

export default AuthController
