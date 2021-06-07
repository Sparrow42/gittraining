import { Module } from '@nestjs/common';
import { EntityModule } from './EntityModule';
import { UserModule } from './UserModule';
import { PerformanceModule } from './PerformanceModule';

@Module({
    imports: [EntityModule, PerformanceModule, UserModule]
})
export class ApplicationModule {}
