import { Module } from '@nestjs/common';

import { AppController } from '@root/app.controller';
import { AppService } from '@root/app.service';
import { AuthModule } from '@auth/auth.module';
import { ProductModule } from '@product/product.module';
import { DatabaseModule } from '@database/database.module';
import { UsersModule } from '@users/users.module';
import { EmailModule } from '@email/email.module';
import { ReservationModule } from '@reservation/reservation.module';
import { RedisModule } from '@redis/redis.module';
import { CommentModule } from '@comment/comment.module';
import { AppConfigModule } from '@common/config/config.module';
import { LoggerModule } from './logger/logger.module';
import { RatingModule } from './rating/rating.module';
import { MovieModule } from './movie/movie.module';
import { ScheduleModule } from '@nestjs/schedule';
import { LocalFilesModule } from './local-files/local-files.module';

@Module({
  imports: [
    AppConfigModule,
    DatabaseModule,
    AuthModule,
    ProductModule,
    UsersModule,
    EmailModule,
    RedisModule,
    CommentModule,
    ReservationModule,
    LoggerModule,
    RatingModule,
    MovieModule,
    ScheduleModule.forRoot(),
    LocalFilesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
