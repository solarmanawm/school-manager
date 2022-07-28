import Express from "express";
/**
 * Server Interface
 */
export interface ServerInterface {
    start: () => void;
    instance: Express.Express;
}
/**
 * Server Class
 * @implements ServerInterface
 */
declare class Server implements ServerInterface {
    private readonly express;
    /**
     * The constructor
     * @constructor
     */
    constructor();
    /**
     * Get the express app instance
     * @getter
     */
    get instance(): Express.Express;
    /**
     * Register a middleware
     * @param {RequestHandler | ErrorRequestHandler} mdlwr
     * @private
     */
    private registerMiddleware;
    /**
     * Unhandled Rejection handler
     * @param {{ close: () => void }} expressApp
     * @private
     */
    private unhandledRejection;
    /**
     * Start the server
     */
    start(): void;
}
export default Server;
