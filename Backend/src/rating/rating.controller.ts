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
import { RatingService } from './rating.service';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
import { JwtAuthGuard } from '@auth/guards/jwt-auth.guard';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { RequestWithUserInterface } from '@auth/interfaces/requestWithUser.interface';

@Controller('rating')
export class RatingController {
  constructor(private readonly ratingService: RatingService) {}

  @Post('create')
  @ApiBody({ type: CreateRatingDto })
  @ApiOperation({
    summary: '신뢰도점수 ',
    description: '상대를 점수를 주는 api',
  })
  @ApiResponse({
    description: 'rating user',
  })
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  async createRating(@Body() createRatingDto: CreateRatingDto) {
    console.log(createRatingDto); // 확인용 로그
    return await this.ratingService.createRating(createRatingDto);
  }
}
