import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Rating } from '@rating/entities/rating.entity';
import { Repository } from 'typeorm';
import { User } from '@users/entities/user.entity';

@Injectable()
export class RatingService {
  constructor(
    @InjectRepository(Rating) private ratingRepository: Repository<Rating>,
  ) {}

  async createRating(createRatingDto: CreateRatingDto, user: User) {
    const newRating = await this.ratingRepository.create({
      ...createRatingDto,
      reviewedBy: user,
    });
    await this.ratingRepository.save(newRating);
    return newRating;
  }

  async getRating(id: string) {
    const rating = await this.ratingRepository.find({
      where: { reviewedBy: { id } },
      relations: ['reviewedFrom','reviewedBy','productInfo'],
    });
    return rating;
  }

  async deleteRating(id: string) {
    const rating = await this.ratingRepository.delete({id})
    return rating
    // if (rating.user.id === user.id) {
    //   await this.ratingRepository.delete(id);
    //
    //   return 'deleted rating';
    // }
  }

  async getAllUser(id: string) {
    const user = await this.ratingRepository.find({
      where: { reviewedFrom: { id } },
      relations: ['reviewedBy','productInfo'],
    });
    if (user.length > 0) {
      const ratingSum = user.reduce((sum, rating) => sum + rating.rating, 0);
      const ratingAverage = ratingSum / user.length;

      return {user, ratingAverage};
    }
    throw new HttpException('No UserId', HttpStatus.NOT_FOUND);
  }
}
