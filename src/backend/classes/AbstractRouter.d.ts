import Express, { Router } from 'express';
import { ControllerInterface } from './Controller';
/**
 * Router interface
 */
export interface RouterInterface {
    path: string;
    handler: Router;
}
/**
 * Abstract Router Class
 * @implements RouterInterface
 */
declare abstract class AbstractRouter<T extends ControllerInterface> implements RouterInterface {
    protected readonly router: Router;
    private readonly basePath;
    /**
     * Assign routes
     * @param {<T>} controller
     * @protected
     * @abstract
     */
    protected abstract assignRoutes(controller: T): void;
    /**
     * @constructor
     * @param {<T>} controller A router controller
     * @param {string} path A outer relative path
     */
    constructor(controller: T, path: string);
    /**
     * Get a base path
     * @getter
     */
    get path(): string;
    /**
     * Get a router handler
     * @getter
     */
    get handler(): Express.Router;
}
export default AbstractRouter;
