import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { CommonEntity } from '@common/entities/common.entity';
import { Reservation } from '@reservation/entities/reservation.entity';
import { User } from '@users/entities/user.entity';

@Entity()
export class Order extends CommonEntity {
  @OneToMany(() => Reservation, (reservation: Reservation) => reservation.order)
  public order: Reservation[];

  @ManyToOne(() => User, (user: User) => user.orders)
  @JoinColumn()
  public user: User;
}
