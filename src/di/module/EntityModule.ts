import { DatabaseModule } from 'lib-web-api-framework';
import { Module } from '@nestjs/common';
import * as ormconfig from '../../data/ormconfig';
@Module({
    imports: [DatabaseModule.forRoot(ormconfig)]
})
export class EntityModule {}
