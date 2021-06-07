import IUserService from './interface/IUserService';
import { JoinPoint } from 'lib-web-api-framework';
import * as constants from '../util/constants';
import { Inject } from '@nestjs/common';
import IUserBaseInfoRepository from '../data/repository/interface/IUserBaseInfoRepository';
import CreateUserOutVo from './vo/CreateUserOutVo';
import UserBaseInfoEntity from '../data/entity/UserBaseInfoEntity';
import { plainToClass } from 'class-transformer';
import UpdateUserOutVo from './vo/UpdateUserOutVo';
import FindUserOutVo from './vo/FindUserOutVo';

@JoinPoint()
class UserService implements IUserService {
    /**
     * DAO 定義。DI コンテナによって Repository クラスのインスタンスが注入されます。
     */
    @Inject(constants.I_USER_BASE_INFO_REPOSITORY)
    // @ts-ignore
    private readonly userBaseInfoRepository: IUserBaseInfoRepository;

    async findUserByUserId(userId: string): Promise<FindUserOutVo> {
        return {} as any;
    }

    // ユーザ情報取得メソッド。
    async findUsers(): Promise<ReadonlyArray<FindUserOutVo>> {
        // ② DAO 呼び出し。
        const entityList: ReadonlyArray<UserBaseInfoEntity> = await this.userBaseInfoRepository.readAll();
        // ③ ValueObject 定義。
        const outVoList: FindUserOutVo[] = [];
        // ④ データ変換と格納
        entityList.forEach((entity: UserBaseInfoEntity) => {
            const outVo: FindUserOutVo = plainToClass(FindUserOutVo, entity);
            outVoList.push(outVo);
        });
        return outVoList;
    }

    async createUser(userId: string, userName: string, userNameKana: string, userMailAddress: string): Promise<CreateUserOutVo> {
        const entity: UserBaseInfoEntity = new UserBaseInfoEntity();
        entity.userId = userId;
        entity.userName = userName;
        entity.userNameKana = userNameKana;
        entity.userMailAddress = userMailAddress;
        entity.createUserId = userId;
        entity.updateUserId = userId;

        const createdEntity: UserBaseInfoEntity = await this.userBaseInfoRepository.create(entity);
        return plainToClass(CreateUserOutVo, createdEntity);
    }

    async updateUser(userId: string, userName: string, userNameKana: string, userMailAddress: string): Promise<UpdateUserOutVo> {
        const entity: UserBaseInfoEntity = new UserBaseInfoEntity();
        entity.userId = userId;
        entity.userName = userName;
        entity.userNameKana = userNameKana;
        entity.userMailAddress = userMailAddress;
        entity.createUserId = userId;
        entity.updateUserId = userId;

        const createdEntity: UserBaseInfoEntity = await this.userBaseInfoRepository.update(entity);
        return plainToClass(CreateUserOutVo, createdEntity);
    }

    async deleteUserByUserId(userId: string): Promise<void> {
        await this.userBaseInfoRepository.deleteByUserId(userId);
    }
}

Object.seal(UserService);
export default UserService;
