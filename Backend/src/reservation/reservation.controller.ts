import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  Req,
  Query,
  Delete,
  Res,
  Put,
  Patch,
} from '@nestjs/common';

import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ReservationService } from '@reservation/reservation.service';
import { CreateReservationDto } from '@reservation/dto/create-reservation.dto';
import { JwtAuthGuard } from '@auth/guards/jwt-auth.guard';
import { RequestWithUserInterface } from '@auth/interfaces/requestWithUser.interface';
import { User } from '@users/entities/user.entity';
import { Product } from '@product/entities/product.entity';
import { PageOptionsDto } from '@common/dtos/page-options.dto';

@ApiTags('Reservation')
@Controller('reservation')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  @Post()
  @ApiBody({ type: CreateReservationDto })
  @ApiOperation({ summary: '예약하기', description: '예약하기 api' })
  @ApiResponse({
    description: 'reservation success',
  })
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  async createReservation(
    @Req() req: RequestWithUserInterface,
    @Body() createReservationDto: CreateReservationDto,
  ) {
    const newReservation = await this.reservationService.productReservation(
      createReservationDto,
      req.user,
    );
    return newReservation;
  }

  @Get()
  @ApiOperation({
    summary: '예약 전체리스트',
    description: '예약 전체 리스트 조회',
  })
  async getAllReservation(
    // @Req() req: RequestWithUserInterface,
    @Query('user') user?: User,
    @Query('product') product?: Product,
  ) {
    const reservations = await this.reservationService.reservationGetAll(
      user,
      product,
    );
    return reservations;
  }

  @Get('/purchase')
  @ApiOperation({
    summary: '판매된 예약상품',
    description: '판매완료된 예약상품 API',
  })
  @UseGuards(JwtAuthGuard)
  async purchasedReservation(@Req() req: RequestWithUserInterface) {
    const { user } = req;
    const data = await this.reservationService.purchasedReservation(user.id);
    return data;
  }

  @Get(':id')
  @ApiOperation({ summary: '예약조회', description: '예약 조회' })
  async getReservationById(@Param('id') id: string) {
    const reservation = await this.reservationService.reservationGetById(id);
    return reservation;
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: '예약수정', description: '예약수정' })
  async updatedReservationById(
    @Param('id') id: string,
    @Body() createReservationDto: CreateReservationDto,
  ) {
    return await this.reservationService.updateReservation(
      id,
      createReservationDto,
    );
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: '예약취소', description: '예약삭제 api' })
  async deleteReservationById(
    @Param('id') id: string,
    @Req() req: RequestWithUserInterface,
  ) {
    const { user } = req;
    return await this.reservationService.deleteReservationById(id, user);
  }
}
