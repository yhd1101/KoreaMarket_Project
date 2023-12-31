import { Column, Entity } from 'typeorm';
import { CommonEntity } from '@common/entities/common.entity';

@Entity()
export class LocalFileEntity extends CommonEntity {
  @Column()
  filename: string;

  @Column()
  path: string;

  @Column()
  mimetype: string;
}
