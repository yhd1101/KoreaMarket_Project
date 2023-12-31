import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reservation } from '@reservation/entities/reservation.entity';
import { CreateReservationDto } from '@reservation/dto/create-reservation.dto';
import { User } from '@users/entities/user.entity';
import { Product } from '@product/entities/product.entity';
import { use } from 'passport';
import { PageOptionsDto } from '@common/dtos/page-options.dto';
import { PageMetaDto } from '@common/dtos/page-meta.dto';
import { PageDto } from '@common/dtos/page.dto';

@Injectable()
export class ReservationService {
  constructor(
    @InjectRepository(Reservation)
    private reservationRepository: Repository<Reservation>,
  ) {}

  //등록해주는 로직
  async productReservation(
    createReservationDto: CreateReservationDto,
    user: User,
  ) {
    const newReservation = await this.reservationRepository.create({
      ...createReservationDto,
      user,
    });
    console.log(newReservation);
    await this.reservationRepository.save(newReservation);
    return newReservation;
  }
  async reservationGetAll(user?: User, product?: Product) {
    const reservations = await this.reservationRepository.find({
      relations: ['users', 'product'], //관계형으로 이어진것을 보여줌
    });
    return { count: reservations.length, reservations };
    // const queryBuilder = await this.reservationRepository.createQueryBuilder(
    //   'reservation',
    // );
    // queryBuilder.leftJoinAndSelect('reservation.user', 'users');
    // queryBuilder.leftJoinAndSelect('reservation.product', 'product');
    //
    // if (user) {
    //   queryBuilder.where('reservation.user = :user', { user });
    // }
    // if (product) {
    //   queryBuilder.where('reservation.product.id = :product', { product });
    // }
    // const { entities } = await queryBuilder.getRawAndEntities();
    // return entities;
  }

  async reservationGetById(id: string) {
    const reservation = await this.reservationRepository.findOne({
      where: { id },
      relations: ['user', 'product', 'product.seller'],
    });
    if (reservation) return reservation;
    throw new HttpException('No reservation', HttpStatus.NOT_FOUND);
  }
  //수정 reservation
  async updateReservation(
    id: string,
    createReservationDto: CreateReservationDto,
  ) {
    try {
      console.log(createReservationDto);
      await this.reservationRepository.update(id, createReservationDto);
      return 'updated reservation';
    } catch (err) {
      throw new NotFoundException('reservation not found');
    }
  }

  async purchasedReservation(id: string) {
    const purchase = true;

    if (purchase) {
      const reservations = await this.reservationRepository.find({
        where: { user: { id }, purchase: true },
        relations: ['user', 'product'], //관계형으로 이어진것을 보여줌
      });
      return reservations;
    } else {
      throw new HttpException('No purchase', HttpStatus.NOT_FOUND);
    }
  }

    // if (purchase) {
    //   const [reservations, reservationsCount] = await Promise.all([
    //     this.reservationRepository.find({
    //       where: { user: { id }, purchase: true },
    //       relations: ['user', 'product'],
    //     }),
    //     this.reservationRepository.count({
    //       where: { user: { id }, purchase: true },
    //     }),
    //   ]);
    //
    //   return { reservations, reservationsCount };
    // } else {
    //   throw new HttpException('No purchase', HttpStatus.NOT_FOUND);
    // }




  async deleteReservationById(id: string, user: User) {
    const reservation = await this.reservationRepository.findOne({
      where: { id },
      relations: ['user', 'product'],
    });
    console.log('++++++++++++++++++', reservation.user);
    console.log('------', reservation.user.id === user.id);
    // if (reservation) return reservation;
    if (reservation.user.id === user.id) {
      await this.reservationRepository.delete(id);

      return 'deleted reservation';
    }
    throw new HttpException('not reservation', HttpStatus.FORBIDDEN);
  }
}
