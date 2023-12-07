import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { CommonEntity } from '@common/entities/common.entity';
import { Product } from '@product/entities/product.entity';
import { User } from '@users/entities/user.entity';
import Joi from '@hapi/joi';
import { flatten } from '@nestjs/common';

@Entity()
export class Reservation extends CommonEntity {
  @Column()
  public location: string;

  @OneToOne(() => Product, (product: Product) => product.reservation)
  @JoinColumn()
  public product: Product;

  @Column({
    default: false,
  }) //true면 판매
  public purchase: boolean;

  @ManyToOne(() => User, (user: User) => user.reservation)
  @JoinColumn()
  public user: User;

  @Column()
  public desc: string;

  @Column({ type: 'timestamptz' })
  public reservationDate: Date;
}
