import Express, {Router} from 'express';
import {ControllerInterface} from './Controller'
import config from '../../../config';

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
abstract class AbstractRouter<T extends ControllerInterface> implements RouterInterface {
    protected readonly router: Router;
    private readonly basePath: string;

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
    constructor(controller: T, path: string) {
        this.router = new (Express.Router as any)();
        this.basePath = `/api/v${config.api.version}/${path.toLowerCase()}`;
        this.assignRoutes(controller);
    }

    /**
     * Get a base path
     * @getter
     */
    get path() {
        return this.basePath;
    }

    /**
     * Get a router handler
     * @getter
     */
    get handler() {
        return this.router;
    }
}

export default AbstractRouter;
