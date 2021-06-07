import { ApiUseTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Controller, Get, Res } from '@nestjs/common';
import GetPerformanceResponse from './response/GetPerformanceResponse';
import { Response } from 'express';
import { JoinPoint, AppLogger, LoggerFactory, ApiMeta } from 'lib-web-api-framework';

@ApiUseTags('Performance')
@Controller('v1/performance')
@JoinPoint()
class PerformaceController {
    private appLogger: AppLogger = LoggerFactory.getAppLogger(PerformaceController.name);

    @ApiMeta({
        authEnabled: false
    })
    @ApiOperation({
        title: 'パフォーマンス検証用 API',
        operationId: 'v1/performance-getPerformance',
        description: '正規表現を使った文字列置換処理を 1000000 回実行します。'
    })
    @ApiResponse({ status: 200, type: GetPerformanceResponse })
    @Get()
    async getPerformance(@Res() res: Response): Promise<GetPerformanceResponse> {
        //
        // 検証用のコード。
        // 1000000 回ループして正規表現を使って文字列置換をしている。
        //
        let count: number = 0;
        while (count < 1000000) {
            const beforeText: string = 'legend-ta@example.com';
            const regexp: any = /[\w.\-]+@[\w\-]+\.[\w.\-]+/;
            beforeText.replace(regexp, '$1');
            beforeText.replace(regexp, '$1');
            beforeText.replace(regexp, '$1');
            const i: number = 1;
            count = count + parseInt(i.toString(), 10);
        }
        this.appLogger.info('Completed in performance process.');
        return new GetPerformanceResponse();
    }
}

export default PerformaceController;
