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

  @Post()
  @ApiBody({ type: CreateRatingDto })
  @ApiOperation({ summary: '신뢰도점수', description: '신뢰도 점수 체크하기' })
  @ApiResponse({
    description: 'Rating success',
  })
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  async createRating(@Body() createRatingDto: CreateRatingDto) {
    const newRating = await this.ratingService.createRating(createRatingDto);
    return newRating;
  }
}
