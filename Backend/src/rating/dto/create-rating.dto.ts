import { User } from '@users/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { Product } from '@product/entities/product.entity';

export class CreateRatingDto {
  @ApiProperty({
    description: 'insert rating',
    default: 1,
  })
  rating: number;

  @ApiProperty({
    description: 'insert userId',
  })
  reviewedFrom: User;

  @ApiProperty({
    description: 'insert productId',
  })
  productInfo: Product;

  @ApiProperty({
    description: 'insert Review',
  })
  review: string;
}
