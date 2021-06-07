import { ApiModelProperty } from '@nestjs/swagger';

class PutUserRequest {
    @ApiModelProperty({
        description: 'ユーザ名。'
    })
    // @ts-ignore
    readonly userName: string;

    @ApiModelProperty({
        description: 'ユーザ名 (カナ)。'
    })
    // @ts-ignore
    readonly userNameKana: string;

    @ApiModelProperty({
        description: 'ユーザのメールアドレス。'
    })
    // @ts-ignore
    readonly userMailAddress: string;
}

Object.seal(PutUserRequest);
export default PutUserRequest;
