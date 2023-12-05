import { Module } from '@nestjs/common';
import { OrderController } from '@order/order.controller';
import { OrderService } from '@order/order.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from '@order/entities/order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order])],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
