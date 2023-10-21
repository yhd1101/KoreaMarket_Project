import {Injectable, NotFoundException, Req} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import {FindOperator, Repository} from 'typeorm';

import * as bcrypt from 'bcryptjs';
import { User } from '@users/entities/user.entity';
import { CreateUserDto } from '@users/dto/create-user.dto';
import {Reservation} from "@reservation/entities/reservation.entity";
import {Product} from "@product/entities/product.entity";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) //db활용
    private userRepository: Repository<User>,
  ) {}

  // //프로필
  // async userGetAll(reservation?:Reservation) {
  //   const queryBuilder = await this.userRepository.createQueryBuilder('user',);
  //   queryBuilder.leftJoinAndSelect('user.reservation', 'reservation')
  //
  //   if (reservation) {
  //     queryBuilder.where('user.reservation = :reservation', { reservation})
  //   }
  //   const {entities } = await queryBuilder.getRawAndEntities()
  //   return entities
  // }

  // async userGetAll(user: User, reservation?: Reservation, product?: Product) {
  //   const query = this.userRepository.createQueryBuilder('user')
  //       .leftJoinAndSelect('user.reservation', 'reservation') // 관련 예약을 가져오도록 수정
  //       .where('user.id = :userId', { userId: user.id }); // 특정 사용자에 대한 것만 가져오도록 수정
  //
  //   if (reservation) {
  //     query.andWhere('reservation.id = :reservationId', { reservationId: reservation.id });
  //   }
  //
  //   if (product) {
  //     query.andWhere('product.id = :productId', { productId: product.id });
  //   }
  //
  //   return query.getOne()
  // }

  async userGetAll( id: string,reservation?: Reservation) {
    const profile = await  this.userRepository.findOne({
      where: {id},
      relations : ['reservation']
    });
    return { profile }
    // const queryBuilder = await this.userRepository.createQueryBuilder(
    //     'user',
    // );
    // queryBuilder.leftJoinAndSelect('user.reservation', 'users');
    //
    // if (reservation) {
    //   queryBuilder.where('user.reservation = :reservation', { reservation });
    // }
    //
    // const { entities } = await queryBuilder.getRawAndEntities();
    // return entities;
  }

  //user생성로직
  async CreateUser(createUserDto: CreateUserDto) {
    const newSignup = await this.userRepository.create(createUserDto);
    // newSignup.provider = Provider.LOCAL;
    await this.userRepository.save(newSignup);
    return newSignup;
  }

  //user 찾기(by id)
  async getUserById(id: string) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException('No user Id');
    }
    return user;
  }

  //email로 찾기
  async getUserByEmail(email: string) {
    const user = await this.userRepository.findOneBy({ email });
    if (!user) {
      throw new NotFoundException('No user Email');
    }
    return user;
  }

  //패스워드 바꾸기
  async changePassword(email: string, password: string) {
    const user = await this.userRepository.findOneBy({ email });
    user.password = await bcrypt.hash(password, 10);
    return this.userRepository.save(user);
  }
}
