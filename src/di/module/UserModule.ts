import { Module } from '@nestjs/common';
import { RepositoryModuleHelper } from 'lib-web-api-framework';
import UserServiceProvider from '../provider/UserServiceProvider';
import * as constants from '../../util/constants';
import UsersController from '../../controller/UsersController';
import UserBaseInfoTestRepository from '../../data/repository/UserBaseInfoTestRepository';
import UserBaseInfoRepository from '../../data/repository/UserBaseInfoRepository';

@Module({
    imports: [RepositoryModuleHelper.create(constants.I_USER_BASE_INFO_REPOSITORY, process.env.NODE_ENV === 'test' ? UserBaseInfoTestRepository : UserBaseInfoRepository)],
    providers: [UserServiceProvider.create()],
    controllers: [UsersController]
})
export class UserModule {}
