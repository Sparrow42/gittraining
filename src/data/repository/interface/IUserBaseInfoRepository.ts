import UserBaseInfoEntity from '../../entity/UserBaseInfoEntity';

export default interface IUserBaseInfoRepository {
    // ① インターフェイス定義
    readAll(): Promise<ReadonlyArray<UserBaseInfoEntity>>;

    readByUserId(userId: string): Promise<UserBaseInfoEntity>;

    create(entity: UserBaseInfoEntity): Promise<UserBaseInfoEntity>;

    update(entity: UserBaseInfoEntity): Promise<UserBaseInfoEntity>;

    deleteByUserId(userId: string): Promise<void>;
}
