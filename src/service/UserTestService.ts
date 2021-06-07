import IUserService from './interface/IUserService';
import CreateUserOutVo from './vo/CreateUserOutVo';
import FindUserOutVo from './vo/FindUserOutVo';
import UpdateUserOutVo from './vo/UpdateUserOutVo';

class UserTestService implements IUserService {
    async findUsers(): Promise<ReadonlyArray<FindUserOutVo>> {
        return [
            {
                userId: '388d31e9-c89f-45f6-bae8-b6279c60ed8e',
                userName: '竜骨太郎',
                userNameKana: 'りゅうこつたろう',
                userMailAddress: 'lakeel-ta@lakeel.com'
            },
            {
                userId: '388d31e9-c89f-45f6-bae8-b6279c60ed8e',
                userName: '竜骨花子',
                userNameKana: 'りゅうこつはなこ',
                userMailAddress: 'lakeel-ha@lakeel.com'
            }
        ];
    }

    findUserByUserId(userId: string): Promise<FindUserOutVo> {
        throw new Error('Method not implemented.');
    }

    createUser(userId: string, userName: string, userNameKana: string, userMailAddress: string): Promise<CreateUserOutVo> {
        throw new Error('Method not implemented.');
    }

    updateUser(userId: string, userName: string, userNameKana: string, userMailAddress: string): Promise<UpdateUserOutVo> {
        throw new Error('Method not implemented.');
    }

    deleteUserByUserId(userId: string): Promise<void> {
        throw new Error('Method not implemented.');
    }
}

Object.seal(UserTestService);
export default UserTestService;
