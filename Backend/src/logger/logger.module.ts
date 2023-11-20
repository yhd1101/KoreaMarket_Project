import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import CustomLogger from '@root/logger/customLogger';

@Module({
  imports: [ConfigModule],
  controllers: [CustomLogger],
  providers: [CustomLogger],
})
export class LoggerModule {}
