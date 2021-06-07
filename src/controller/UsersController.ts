import { Controller, Get, Res, Inject, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Response } from 'express';
import { ApiResponse, ApiOperation, ApiUseTags } from '@nestjs/swagger';
import * as constants from '../util/constants';
import IUserService from '../service/interface/IUserService';
import FindUserOutVo from '../service/vo/FindUserOutVo';
import { plainToClass } from 'class-transformer';
import { ApiMeta } from 'lib-web-api-framework';
import UserIdPathParam from './request/UserIdPathParam';
import PostUserRequest from './request/PostUserRequest';
import CreateUserOutVo from '../service/vo/CreateUserOutVo';
import PutUserRequest from './request/PutUserRequest';
import PutUserResponse from './response/PutUserResponse';
import UpdateUserOutVo from '../service/vo/UpdateUserOutVo';
import GetUserResponse from './response/GetUserResponse';
import PostUserResponse from './response/PostUserResponse';

@ApiUseTags('Users')
@Controller('v1/users')
class UsersController {
    /**
     * Service 定義。DI コンテナによって Service クラスのインスタンスが注入されます。
     */
    @Inject(constants.I_USER_SERVICE)
    // @ts-ignore
    private readonly userService: IUserService;

    // ① API リファレンス定義
    @ApiMeta({
        authEnabled: false
    })
    @ApiOperation({
        title: 'ユーザ一覧取得',
        description: 'すべてのユーザを取得します。'
    })
    @ApiResponse({ status: 200, type: GetUserResponse })
    // ② HTTP メソッド定義
    @Get()
    async getUsers(@Res() res: Response): Promise<GetUserResponse[]> {
        // ③ Service 呼び出し
        const outVoList: ReadonlyArray<FindUserOutVo> = await this.userService.findUsers();
        // ④ Response 定義
        const jsons: GetUserResponse[] = [];
        // ⑤ データ変換と格納
        outVoList.forEach((outVo: FindUserOutVo) => {
            const json: GetUserResponse = plainToClass(GetUserResponse, outVo);
            jsons.push(json);
        });
        // ⑥ レスポンス返却
        return jsons;
    }

    @ApiMeta({
        authEnabled: false
    })
    @ApiOperation({
        title: 'ユーザ情報取得',
        description: '特定のユーザ情報を取得します。'
    })
    @ApiResponse({ status: 200, type: GetUserResponse })
    @Get(':userId')
    async getUsersByUserId(@Param() params: UserIdPathParam, @Res() res: Response): Promise<GetUserResponse | void> {}

    @ApiMeta({
        authEnabled: false
    })
    @ApiOperation({
        title: 'ユーザ作成',
        description: 'ユーザを作成します。'
    })
    @ApiResponse({ status: 201, type: PostUserResponse })
    @Post()
    async postUsers(@Body() body: PostUserRequest, @Res() res: Response): Promise<PostUserResponse> {
        const outVo: CreateUserOutVo = await this.userService.createUser(body.userId, body.userName, body.userNameKana, body.userMailAddress);
        return plainToClass(PostUserResponse, outVo);
    }

    @ApiMeta({
        authEnabled: false
    })
    @ApiOperation({
        title: 'ユーザデータ更新',
        description: '特定のユーザ情報を更新します。'
    })
    @Put(':userId')
    @ApiResponse({ status: 200, type: PutUserResponse })
    async putUsersByUserId(@Param() params: UserIdPathParam, @Body() body: PutUserRequest, @Res() res: Response): Promise<PutUserResponse> {
        const outVo: UpdateUserOutVo = await this.userService.updateUser(params.userId, body.userName, body.userNameKana, body.userMailAddress);
        return plainToClass(PutUserResponse, outVo);
    }

    @ApiMeta({
        authEnabled: false
    })
    @ApiOperation({
        title: 'ユーザ削除',
        description: '特定のメッセージを削除します。'
    })
    @ApiResponse({ status: 204 })
    @Delete(':userId')
    async deleteUsersByUserId(@Param() params: UserIdPathParam, @Res() res: Response): Promise<void> {
        await this.userService.deleteUserByUserId(params.userId);
        return;
    }
}

export default UsersController;
