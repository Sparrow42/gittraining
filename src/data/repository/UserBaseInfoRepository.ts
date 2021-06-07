import { EntityRepository, ObjectType } from 'typeorm';
import { AbstractRepository, JoinPoint } from 'lib-web-api-framework';
import UserBaseInfoEntity from '../entity/UserBaseInfoEntity';
import IUserBaseInfoRepository from './interface/IUserBaseInfoRepository';

@JoinPoint()
@EntityRepository()
class UserBaseInfoRepository extends AbstractRepository<UserBaseInfoEntity> implements IUserBaseInfoRepository {
    /**
     * エイリアス（AILIAS）定義は、テーブル名を定義することで再利用できるようにします。ユーザ情報テーブル user_base_info を設定します。
     */
    private static readonly ALIAS: string = 'user_base_info';

    /**
     *
     * 呼び出し元のクラスに Repository で使用するオブジェクトを返却します。UserBaseInfoEntity をオブジェクトの戻り値として定義します。
     */
    getObjectType(): ObjectType<UserBaseInfoEntity> {
        return UserBaseInfoEntity;
    }

    /**
     * 呼び出し元のクラスに Repository で使用するエイリアスを返却します。先程定義したエイリアスを戻り値として定義します。
     */
    getAlias(): string {
        return UserBaseInfoRepository.ALIAS;
    }

    /**
     * テーブルにテナントコードを持たない場合、false を返却します。(デフォルトは true です。)
     */
    isTenantCodeRequired(): boolean {
        return false;
    }

    // ② ユーザ情報取得メソッド。
    async readAll(): Promise<ReadonlyArray<UserBaseInfoEntity>> {
        return await this.createSelectQueryBuilder().getMany();
    }

    async readByUserId(userId: string): Promise<UserBaseInfoEntity> {
        return {} as any;
    }

    async create(entity: UserBaseInfoEntity): Promise<UserBaseInfoEntity> {
        return await this.manager.save(entity);
    }

    async update(entity: UserBaseInfoEntity): Promise<UserBaseInfoEntity> {
        return await this.manager.save(entity);
    }

    async deleteByUserId(userId: string): Promise<void> {
        await this.createDeleteQueryBuilder()
            .andWhere('user_id = :userId', { userId })
            .execute();
    }
}

Object.seal(UserBaseInfoRepository);
export default UserBaseInfoRepository;
