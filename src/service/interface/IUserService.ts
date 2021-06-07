import FindUserOutVo from '../vo/FindUserOutVo';
import CreateUserOutVo from '../vo/CreateUserOutVo';
import UpdateUserOutVo from '../vo/UpdateUserOutVo';

export default interface IUserService {
    // ① インターフェイス定義
    findUsers(): Promise<ReadonlyArray<FindUserOutVo>>;

    findUserByUserId(userId: string): Promise<FindUserOutVo>;

    createUser(userId: string, userName: string, userNameKana: string, userMailAddress: string): Promise<CreateUserOutVo>;

    updateUser(userId: string, userName: string, userNameKana: string, userMailAddress: string): Promise<UpdateUserOutVo>;

    deleteUserByUserId(userId: string): Promise<void>;
}
