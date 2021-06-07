import { ApiModelProperty } from '@nestjs/swagger';

class UserIdPathParam {
    @ApiModelProperty({
        required: true,
        description: 'ユーザ ID。'
    })
    // @ts-ignore
    readonly userId: string;
}

Object.seal(UserIdPathParam);
export default UserIdPathParam;
