import { CreateOrderDto } from '@order/dto/create-order.dto';
import { UpdateOrderDto } from '@order/dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
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
}
