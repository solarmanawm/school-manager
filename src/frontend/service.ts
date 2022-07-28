import FirebaseServiceProvider from './classes/FirebaseServiceProvider'
import {ServiceProviderInterface} from "./classes/AbstractServiceProvider";

const service: ServiceProviderInterface = new FirebaseServiceProvider()

export default service
