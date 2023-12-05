import { CreateOrderDto } from '@order/dto/create-order.dto';
import { UpdateOrderDto } from '@order/dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Order } from '@order/entities/order.entity';
import { Repository } from 'typeorm';
import { User } from '@users/entities/user.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
  ) {}

  async createOrder(createOrderDto: CreateOrderDto, user: User) {
    const newOrder = await this.orderRepository.create({
      ...createOrderDto,
      user,
    });
    await this.orderRepository.save(newOrder);
    return newOrder;
  }

  async orderGetById(id: string) {
    // const order = await this.orderRepository.findOneBy({ id });
    const order = await this.orderRepository
      .createQueryBuilder('order')
      .leftJoinAndSelect('order', 'order')
      .where('order.id = :id', { id })
      .getOne();

    if (!order) {
      throw new HttpException('No id', HttpStatus.NOT_FOUND);
    }
  }
}
