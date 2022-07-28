import Server, {ServerInterface} from './Server'
import {ModuleInterface} from './AbstractModule'
import FirebaseDatabase from './FirebaseDatabase'
import AuthModule from "./AuthModule";
import UserModule from "./UserModule";

/**
 * Application Class
 */
class Application {
    private readonly server: ServerInterface;

    /**
     * The constructor
     * @constructor
     */
    constructor() {
        this.server = new Server();
        const database = new FirebaseDatabase();

        const modules: ModuleInterface[] = [
            new AuthModule(),
            new UserModule(),
        ];

        for (const module of modules) {
            module.initialize(this.server.instance, database);
        }
    }

    /**
     * Start the application
     */
    start() {
        this.server.start();
    }
}

export default Application
