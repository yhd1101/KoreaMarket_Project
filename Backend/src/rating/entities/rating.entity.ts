import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { CommonEntity } from '@common/entities/common.entity';
import { User } from '@users/entities/user.entity';
import Joi from '@hapi/joi';
import { Product } from '@product/entities/product.entity';

@Entity()
export class Rating extends CommonEntity {
  @Column({
    default: 1,
  })
  public rating: number;

  //판매자 정보
  @ManyToOne(() => User, (user: User) => user.reviewedFrom)
  @JoinColumn()
  public reviewedFrom: User;

  @OneToOne(() => Product, (product: Product) => product.rating)
  @JoinColumn()
  public productInfo: Product;

  @OneToOne(() => User, (user: User) => user.reviewedBy)
  @JoinColumn()
  public reviewedBy: User;

  @Column()
  public review: string;
}
