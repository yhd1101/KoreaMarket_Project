import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Log } from '@root/logger/entities/logger.entity';
import { Repository } from 'typeorm';
import { CreateLoggerDto } from '@root/logger/dto/create-logger.dto';

@Injectable()
export default class LogsService {
  constructor(@InjectRepository(Log) private logRepository: Repository<Log>) {}

  async createLog(log: CreateLoggerDto) {
    const newLog = await this.logRepository.create(log);
    await this.logRepository.save(newLog, {
      data: {
        isCreateLogs: true,
      },
    });
  }
}
