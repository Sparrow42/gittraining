import { Exclude, Expose } from 'class-transformer';
import { ApiModelProperty } from '@nestjs/swagger';
import { Ok } from 'lib-web-api-framework';

@Ok()
@Exclude()
class PutUserResponse {
    @ApiModelProperty({
        description: 'ユーザ ID。'
    })
    @Expose()
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

Object.seal(PutUserResponse);
export default PutUserResponse;
