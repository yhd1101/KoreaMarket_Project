import { Reservation } from '@reservation/entities/reservation.entity';

export class CreateOrderDto {
  order: Reservation[];
}
