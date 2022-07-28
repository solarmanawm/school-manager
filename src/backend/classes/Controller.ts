import {NextFunction, Request, Response, RequestHandler} from "express";
import {DatabaseInterface} from "./AbstractDatabase";

/**
 * Controller Interface
 */
export interface ControllerInterface {
    isAuthenticated: RequestHandler;
}

/**
 * An unauthorized response
 * @param {Response} res A response
 */
const unauthorized = (res: Response) => {
    return res.status(401).send({
        message: 'Unauthorized',
    });
}

/**
 * Controller Class
 * @implements ControllerInterface
 */
class Controller implements ControllerInterface {
    /**
     * @constructor
     * @param {DatabaseInterface} database A database
     */
    constructor(protected database: DatabaseInterface) {
        this.database = database;
    }

    /**
     * A middleware to check if a user is authenticated
     * @param {Request} req A request
     * @param {Response} res A response
     * @param {NextFunction} next A next function
     */
    async isAuthenticated(req: Request, res: Response, next: NextFunction) {
        const {authorization} = req.headers;
        if (!authorization) {
            return unauthorized(res);
        }
        if (!authorization.startsWith('Bearer')) {
            return unauthorized(res);
        }
        const split = authorization.split('Bearer ');
        if (split.length !== 2) {
            return unauthorized(res);
        }
        const token = split[1];
        try {
            const {details} = await this.database.auth.decodeToken(token)
            res.locals = details
            return next();
        } catch (error) {
            console.error(error);
            return unauthorized(res);
        }
    }
}

export default Controller
