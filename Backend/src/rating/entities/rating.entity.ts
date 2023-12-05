import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CommonEntity } from '@common/entities/common.entity';
import { User } from '@users/entities/user.entity';
import Joi from '@hapi/joi';

@Entity()
export class Rating extends CommonEntity {
  @Column({
    default: 1,
  })
  public rating: number;
  @ManyToOne(() => User, (user: User) => user.ratings)
  @JoinColumn()
  public buyer: User;
}
