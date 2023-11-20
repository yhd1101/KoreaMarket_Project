import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import CustomLogger from './customLogger';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Log } from './entities/logger.entity';
import LogsService from './logger.service';

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([Log])],
  providers: [CustomLogger, LogsService],
  exports: [CustomLogger],
})
export class LoggerModule {}
