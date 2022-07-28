import { NextFunction, Request, Response, RequestHandler } from "express";
import { DatabaseInterface } from "./AbstractDatabase";
/**
 * Controller Interface
 */
export interface ControllerInterface {
    isAuthenticated: RequestHandler;
}
/**
 * Controller Class
 * @implements ControllerInterface
 */
declare class Controller implements ControllerInterface {
    protected database: DatabaseInterface;
    /**
     * @constructor
     * @param {DatabaseInterface} database A database
     */
    constructor(database: DatabaseInterface);
    /**
     * A middleware to check if a user is authenticated
     * @param {Request} req A request
     * @param {Response} res A response
     * @param {NextFunction} next A next function
     */
    isAuthenticated(req: Request, res: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>>;
}
export default Controller;
