require('dotenv').config();
import 'reflect-metadata';
import { WebApiApplicationModule, WebApiApplication } from 'lib-web-api-framework';
import { ApplicationModule } from './di/module/ApplicationModule';
import { DocumentBuilder, SwaggerBaseConfig } from '@nestjs/swagger';

(async function(): Promise<void> {
    const app: WebApiApplication = await WebApiApplication.create(WebApiApplicationModule.forRoot(ApplicationModule));
    const options: SwaggerBaseConfig = new DocumentBuilder()
        // ① マイクロサービス名定義。
        .setTitle('LaKeel Ban Toshihiro')
        // ② マイクロサービス説明定義。
        .setDescription('LaKeel Tiger の API リファレンスです。')
        .setSchemes('https')
        .build();
    await app.useSwagger(options).start();
})();

// (async function(): Promise<void> {
//     const app: WebApiApplication = await WebApiApplication.create(WebApiApplicationModule.forRoot(ApplicationModule));
//     app.setBodyParserOption({ limit: '100kb' });
//     app.setTenantCodeRequestValidationEnabled(false);
//     const options: SwaggerBaseConfig = new DocumentBuilder()
//         .setTitle('')
//         .setDescription('')
//         .setSchemes('https')
//         .build();
//     await app.useSwagger(options).start();
// })();
