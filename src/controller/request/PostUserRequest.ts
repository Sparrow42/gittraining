import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

class PostUserRequest {
    @ApiModelProperty({
        description: 'ユーザ ID。'
    })
    @IsNotEmpty()
    // @ts-ignore
    readonly userId: string;

    @ApiModelProperty({
        description: 'ユーザ名。'
    })
    @IsNotEmpty()
    // @ts-ignore
    readonly userName: string;

    @ApiModelProperty({
        description: 'ユーザ名 (カナ)。'
    })
    @IsNotEmpty()
    // @ts-ignore
    readonly userNameKana: string;

    @ApiModelProperty({
        description: 'ユーザのメールアドレス。'
    })
    @IsNotEmpty()
    // @ts-ignore
    readonly userMailAddress: string;
}

Object.seal(PostUserRequest);
export default PostUserRequest;
