import {ServiceProviderInterface} from "./AbstractServiceProvider";

abstract class AbstractService {
    /**
     * @constructor
     * @param {ServiceProviderInterface} provider
     */
    constructor(protected provider: ServiceProviderInterface) {
    }
}

export default AbstractService
