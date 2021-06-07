import { EntityRepository, ObjectType } from 'typeorm';
import { AbstractRepository, JoinPoint } from 'lib-web-api-framework';
import UserBaseInfoEntity from '../entity/UserBaseInfoEntity';
import IUserBaseInfoRepository from './interface/IUserBaseInfoRepository';

@JoinPoint()
@EntityRepository()
class UserBaseInfoTestRepository extends AbstractRepository<UserBaseInfoEntity> implements IUserBaseInfoRepository {
    private static readonly ALIAS: string = 'user_base_info';

    getObjectType(): ObjectType<UserBaseInfoEntity> {
        return UserBaseInfoEntity;
    }

    getAlias(): string {
        return UserBaseInfoTestRepository.ALIAS;
    }

    readAll(): Promise<ReadonlyArray<UserBaseInfoEntity>> {
        throw new Error('Method not implemented.');
    }

    readByUserId(userId: string): Promise<UserBaseInfoEntity> {
        throw new Error('Method not implemented.');
    }

    create(entity: UserBaseInfoEntity): Promise<UserBaseInfoEntity> {
        throw new Error('Method not implemented.');
    }

    update(entity: UserBaseInfoEntity): Promise<UserBaseInfoEntity> {
        throw new Error('Method not implemented.');
    }

    deleteByUserId(userId: string): Promise<void> {
        throw new Error('Method not implemented.');
    }
}

Object.seal(UserBaseInfoTestRepository);
export default UserBaseInfoTestRepository;
