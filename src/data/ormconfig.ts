import * as Entities from './entity';
import * as Migrations from './migration';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const config: TypeOrmModuleOptions = {
    type: 'postgres',
    name: 'default',
    host: process.env.POSTGRES_HOST as string,
    port: parseInt(process.env.POSTGRES_PORT as string, 10),
    username: process.env.POSTGRES_USER_NAME as string,
    password: process.env.POSTGRES_PASSWORD as string,
    database: process.env.POSTGRES_DATABASE as string,
    entities: Object.keys(Entities).map((key: any): any => Entities[key]),
    migrationsRun: false,
    migrations: Object.keys(Migrations).map((key: any): any => Migrations[key]),
    cli: {
        migrationsDir: '/src/data/migration'
    }
};

export = config;
