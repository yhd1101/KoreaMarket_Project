import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from '@hapi/joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      //환경변수 타입 체크
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USERNAME: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),

        ACCESSTOKEN_SECRET_KEY: Joi.string().required(),
        ACCESSTOKEN_EXPIRATION_TIME: Joi.number().required(),

        EMAIL_SERVICE: Joi.string().required(),
        EMAIL_USER: Joi.string().required(),
        EMAIL_PASSWORD: Joi.string().required(),

        REDIS_HOST: Joi.string().required(),
        REDIS_PORT: Joi.number().required(),
        REDIS_USER: Joi.string().required(),
        REDIS_PASSWORD: Joi.string().required(),
        REDIS_TTL: Joi.number().required(),

        GOOGLE_AUTH_CLIENTID: Joi.string().required(),
        GOOGLE_AUTH_CLIENTSECRET: Joi.string().required(),
        GOOGLE_AUTH_CALLBACK_URL: Joi.string().required(),

        KAKAO_AUTH_CLIENTID: Joi.string().required(),
        KAKAO_AUTH_CALLBACK_URL: Joi.string().required(),

        NAVER_AUTH_CLIENTID: Joi.string().required(),
        NAVER_AUTH_CLIENTSECRET: Joi.string().required(),
        NAVAER_AUTH_CALLBACK_URL: Joi.string().required(),

        JWT_CHAGNE_PASSWORD_SECRET: Joi.string().required(),
        JWT_CHAGNE_PASSWORD_EXPIRESIN: Joi.string().required(),
        PASSWORD_CHANGE_URL: Joi.string().required(),

        MOVIE_URL: Joi.string().required(),
        MOVIE_TOKEN: Joi.string().required(),
      }),
    }),
  ], //env파일을 인식해줌
})
export class AppConfigModule {}
