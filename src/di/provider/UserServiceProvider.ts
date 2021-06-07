import { Provider, Scope } from '@nestjs/common';
import * as constants from '../../util/constants';
import { ProviderHelper } from 'lib-web-api-framework';
import UserTestService from '../../service/UserTestService';
import UserService from '../../service/UserService';

export default class UserServiceProvider {
    private constructor() {}

    static create(clazz: any = process.env.NODE_ENV === 'test' ? UserTestService : UserService, scope: Scope = Scope.DEFAULT): Provider {
        return ProviderHelper.create(constants.I_USER_SERVICE, clazz, scope);
    }
}
