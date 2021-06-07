import { Exclude, Expose } from 'class-transformer';
import { ApiModelProperty } from '@nestjs/swagger';
import { Ok } from 'lib-web-api-framework';

// ⑨ データ変換定義。
@Ok()
@Exclude()
class GetUserResponse {
    // ⑧ API リファレンス定義。
    @ApiModelProperty({
        description: 'ユーザ ID。'
    })
    // ⑨ データ変換定義。
    @Expose()
    // ⑦ 読み取り専用のプロパティ定義。
    // @ts-ignore
    readonly userId: string;
    @ApiModelProperty({
        description: 'ユーザ名。'
    })
    @Expose()
    // @ts-ignore
    readonly userName: string;
    @ApiModelProperty({
        description: 'ユーザ名 (カナ)。'
    })
    @Expose()
    // @ts-ignore
    readonly userNameKana: string;
    @ApiModelProperty({
        description: 'ユーザのメールアドレス。'
    })
    @Expose()
    // @ts-ignore
    readonly userMailAddress: string;
}

Object.seal(GetUserResponse);
export default GetUserResponse;
