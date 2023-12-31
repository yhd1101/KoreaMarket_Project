import { NestFactory, Reflector } from '@nestjs/core';

import { SwaggerModule } from '@nestjs/swagger';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { TransformInterceptor } from '@common/interceptors/transform.interceptor';
import { HttpExceptionFilter } from '@common/filters/http-exception.filter';
import { BaseAPIDocument } from '@common/config/swagger.document';
import { AppModule } from '@root/app.module';
import * as cookieParser from 'cookie-parser';
import CustomLogger from './logger/customLogger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });
  app.useLogger(app.get(CustomLogger));
  const configService = app.get(ConfigService);
  app.enableCors();
  // 기본 URL 프리픽스 설정
  app.setGlobalPrefix('api');

  app.use(cookieParser());

  const config = new BaseAPIDocument().initializeOptions();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api-docs', app, document);

  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalPipes(new ValidationPipe({ transform: true })); //적용을하겠다

  // await app.setGlobalPrefix('api');
  await app.listen(8000);
}
bootstrap();
