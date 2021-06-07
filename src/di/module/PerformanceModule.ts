import { Module } from '@nestjs/common';
import PerformanceController from '../../controller/PerformanceController';

@Module({
    controllers: [PerformanceController]
})
export class PerformanceModule {}
