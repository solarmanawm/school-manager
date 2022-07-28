import {Express} from "express";
import {RouterInterface} from './AbstractRouter'
import {DatabaseInterface} from './AbstractDatabase'

/**
 * Module Interface
 */
export interface ModuleInterface {
    initialize: (express: Express, database: DatabaseInterface) => void;
}

/**
 * Abstract Module Class
 * @implements ModuleInterface
 */
abstract class AbstractModule implements ModuleInterface {
    /**
     * A module's factory method
     * @param {DatabaseInterface} database A database
     * @protected
     * @abstract
     */
    protected abstract factory(database: DatabaseInterface): RouterInterface;

    /**
     * Initialize a module
     * @param {Express.Express} express The express server
     * @param {DatabaseInterface} database A database
     */
    initialize(express: Express, database: DatabaseInterface): void {
        const router: RouterInterface = this.factory(database);
        express.use(router.path, router.handler);
    }
}

export default AbstractModule;
