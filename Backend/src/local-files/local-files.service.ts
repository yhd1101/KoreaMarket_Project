import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LocalFileEntity } from '@root/local-files/entities/local-file.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LocalFilesService {
  constructor(
    @InjectRepository(LocalFileEntity)
    private localFileEntityRepository: Repository<LocalFileEntity>,
  ) {}

  async saveLocalFileData(fieData: LocalFileDto) {
    const newFile = await this.localFileEntityRepository.create(fieData);
    await this.localFileEntityRepository.save(newFile);
    return newFile;
  }
}
