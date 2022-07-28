import {UserServiceRegisterResponseInterface, UserServiceRegisterParamsInterface} from "./AbstractUserService";
import AbstractUserService from "./AbstractUserService"
import RequestBuilder from "./RequestBuilder";

class UserService extends AbstractUserService {
    /**
     * Create a new user
     * @param {UserServiceRegisterParamsInterface} params
     * @returns Promise<UserServiceRegisterResponseInterface>
     * @protected
     */
    async create(params: UserServiceRegisterParamsInterface): Promise<UserServiceRegisterResponseInterface> {
        await new RequestBuilder()
            .method('post')
            .url('user/new')
            .data(params)
            .send()

        return this.provider.auth.login(params)
    }
}

export default UserService
