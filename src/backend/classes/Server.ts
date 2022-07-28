import Express, {RequestHandler, ErrorRequestHandler} from "express";

import middlewares from "../middlewares";
import config from '../../../config'

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
class Server implements ServerInterface {
    private readonly express: Express.Express;

    /**
     * The constructor
     * @constructor
     */
    constructor() {
        this.express = Express();
        this.express.set('port', config.port)

        this.registerMiddleware(config.morgan)
        this.registerMiddleware(config.cors)
        this.registerMiddleware(config.helmet)
        this.registerMiddleware(Express.json())
        this.registerMiddleware(Express.static(config.path.public))
    }

    /**
     * Get the express app instance
     * @getter
     */
    get instance(): Express.Express {
        return this.express;
    }

    /**
     * Register a middleware
     * @param {RequestHandler | ErrorRequestHandler} mdlwr
     * @private
     */
    private registerMiddleware(mdlwr: RequestHandler | ErrorRequestHandler) {
        this.express.use(mdlwr);
    }

    /**
     * Unhandled Rejection handler
     * @param {{ close: () => void }} expressApp
     * @private
     */
    private unhandledRejection(expressApp: { close: () => void }) {
        process.on('unhandledRejection', (err: { message: string }) => {
            global.console.log(`Error: ${err.message}`);
            Promise.resolve().then(() => {
                return expressApp.close();
            }).then(() => {
                process.exit(1);
            });
        });
    }

    /**
     * Start the server
     */
    start() {
        for (const mdlwr of middlewares) {
            this.registerMiddleware(mdlwr);
        }
        this.express.get('/ping', (req, res) => {
            res.send('pong');
        });
        const expressApp = this.express.listen(config.port, () => {
            global.console.log(`Listen the server on port #${config.port}...`);
        });
        this.unhandledRejection(expressApp);
    }
}

export default Server
