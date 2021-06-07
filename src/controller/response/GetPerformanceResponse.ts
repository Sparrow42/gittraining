import { Exclude, Expose } from 'class-transformer';
import { ApiModelProperty } from '@nestjs/swagger';
import { Ok } from 'lib-web-api-framework';

@Ok()
@Exclude()
class GetPerformanceResponse {
    @ApiModelProperty({
        example: 'OK'
    })
    @Expose()
    // @ts-ignore
    message: string = 'OK';
}

Object.seal(GetPerformanceResponse);
export default GetPerformanceResponse;
