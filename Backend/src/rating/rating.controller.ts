import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { RatingService } from './rating.service';
import { CreateRatingDto } from './dto/create-rating.dto';
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
  async createRating(
    @Body() createRatingDto: CreateRatingDto,
    @Req() req: RequestWithUserInterface,
  ) {
    console.log(createRatingDto)
    console.log(req.user)
    const newRating = await this.ratingService.createRating(
      createRatingDto,
      req.user,
    );
    return newRating;
  }

  @Get()
  @ApiOperation({
    summary: '신뢰도점수 조회',
    description: '신뢰도 점수 조회하기',
  })
  @ApiResponse({
    description: 'Rating',
  })
  @UseGuards(JwtAuthGuard)
  async getRating(@Req() req: RequestWithUserInterface) {
    const { user } = req;
    const data = await this.ratingService.getRating(user.id);
    return data;
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: '신뢰도점수 삭제', description: '신뢰도 삭제 api' })
  async deleteRating(
    @Param('id') id: string,
    @Req() req: RequestWithUserInterface,
  ) {
    const { user } = req;
  }

  @Get(':id')
  async getbyalluser(@Param('id') id: string) {
    const user = await this.ratingService.getAllUser(id);
    return user;
  }
}
