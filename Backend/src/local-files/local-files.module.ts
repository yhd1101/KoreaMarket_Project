import { Module } from '@nestjs/common';
import { LocalFilesService } from './local-files.service';
import { LocalFilesController } from './local-files.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocalFileEntity } from '@root/local-files/entities/local-file.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LocalFileEntity])],
  controllers: [LocalFilesController],
  providers: [LocalFilesService],
  exports: [LocalFilesService],
})
export class LocalFilesModule {}
