import { ServiceProviderInterface } from "./AbstractServiceProvider";
declare abstract class AbstractService {
    protected provider: ServiceProviderInterface;
    /**
     * @constructor
     * @param {ServiceProviderInterface} provider
     */
    constructor(provider: ServiceProviderInterface);
}
export default AbstractService;
