import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { OrderService } from '@order/order.service';
import { CreateOrderDto } from '@order/dto/create-order.dto';
import { UpdateOrderDto } from '@order/dto/update-order.dto';
import { JwtAuthGuard } from '@auth/guards/jwt-auth.guard';
import { RequestWithUserInterface } from '@auth/interfaces/requestWithUser.interface';

@ApiTags('Order') //api문서화 카테고리
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('create')
  @ApiBody({ type: CreateOrderDto })
  @ApiOperation({
    summary: '상품 주문완료',
    description: '상품을 주문하는 api',
  })
  @ApiResponse({
    description: 'order reservation',
  })
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  async createOrder(
    @Req() req: RequestWithUserInterface,
    @Body() createOrderDto: CreateOrderDto,
  ) {
    return await this.orderService.createOrder(createOrderDto, req.user);
  }
}
