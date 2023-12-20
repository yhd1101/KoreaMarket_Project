import {HttpException, HttpStatus, Inject, Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { Product } from '@product/entities/product.entity';
import { CreateProductDto } from '@product/dto/create-product.dto';
import { User } from '@users/entities/user.entity';
import { PageOptionsDto } from '@common/dtos/page-options.dto';
import { PageDto } from '@common/dtos/page.dto';
import { PageMetaDto } from '@common/dtos/page-meta.dto';
import {CACHE_MANAGER} from "@nestjs/common/cache";
import {Cache} from "cache-manager";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {}

  //등록해주는 로직
  async productCreate(createProductDto: CreateProductDto, user: User) {
    const newProduct = await this.productRepository.create({
      ...createProductDto,
      seller: user,
    });

    await this.productRepository.save(newProduct);
    //redis data 삭제
    await this.cacheManager.del("products")
    return newProduct;
  }

  //전체불러오는 로직
  // async productGetAll(category?: string) {
  //   //?옵션 있어도그만없어도그만
  //   const queryBuilder = await this.productRepository.createQueryBuilder(
  //     'product',
  //   ); //db에 쿼리를직접 해줌
  //   queryBuilder.leftJoinAndSelect('product.seller', 'seller'); //관계형
  //   queryBuilder.leftJoinAndSelect('product.comments', 'comments'); //관계형
  //   if (category && category.length > 0) {
  //     //category에 검색키워드 이거를 검색하면 가져오겠다.
  //     queryBuilder.andWhere(':category = ANY(product.category)', { category });
  //   }
  //   const { entities } = await queryBuilder.getRawAndEntities();
  //   return entities;
  // }

  async getAllProducts(
    pageOptionsDto: PageOptionsDto,
    category?: string | string[],
  ): Promise<PageDto<Product>> {
    //1.전체 프로덕트 api를 Call 했을때 redis에 정보를 조회
    const redisData = await this.cacheManager.get("products")


    //2.redis정보가 있으면 redis에 데이터를 리턴함
    if(redisData) {
      console.log( redisData.length)
      return redisData
    }
    const queryBuilder = await this.productRepository.createQueryBuilder(
      'product',
    );
    queryBuilder.leftJoinAndSelect('product.seller', 'seller');
    queryBuilder.leftJoinAndSelect('product.comments', 'comments');

    console.log(category);

    if (category !== undefined) {
      console.log("+++++++")
      if (Array.isArray(category)) {
        console.log("++++++")
        queryBuilder.andWhere('product.category IN (:...category)', {
          category,
        });
      } else {
        console.log("-------")
        queryBuilder.andWhere('product.category = :category', {
          category,
        });
      }
    }
    // if (category !== undefined) {
    //   console.log("+++++++")
    //   if (Array.isArray(category)) {
    //     console.log("++++++")
    //     queryBuilder.andWhere('product.category IN (:...category)', {
    //       category,
    //     });
    //   }
    // //   } else {
    // //     console.log("-------")
    // //     queryBuilder.andWhere('product.category = :category', {
    // //       category,
    // //     });
    // //   }
    // }else {
    //   console.log("-------")
    // }



    await queryBuilder
      .orderBy('product.createdAt', pageOptionsDto.order)
      .skip(pageOptionsDto.skip)
      .take(pageOptionsDto.take);

    const itemCount = await queryBuilder.getCount();
    const { entities } = await queryBuilder.getRawAndEntities();

    // await this.cacheManager.get(entities)
    //3.redis 정보가 없으면 db에서 콜하고 redis에 저장후 return (set 저장해줌)
    await this.cacheManager.set("products", entities)







    const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto });
    return new PageDto(entities, pageMetaDto);
  }

  async productGetById(id: string) {
    const redisData = await this.cacheManager.get("products")

    const product = await this.productRepository
        .createQueryBuilder('product')
        .leftJoinAndSelect('product.seller', 'seller')
        .leftJoinAndSelect('product.comments', 'comments')
        .leftJoinAndSelect('comments.user', 'user')
        .where('product.id = :id', {id})
        .getOne();



    if (redisData !== null) {
      console.log("+++++")
      const filteredData = await redisData.filter((item: any) => item.id === id)
      console.log("*****",filteredData)
      return filteredData


    }
    // if (!product) {
    //   // id가 없을때 만들어줌
    //   throw new HttpException('No id', HttpStatus.NOT_FOUND);
    // }
    console.log("-------")
    return product;






      // if (Array.isArray(redisData)) {
      //   const ids = redisData.map(item => item.id);
      //   console.log("IDs:", ids);
      // } else {
      //   console.log("올바르지 않은 데이터 형식입니다.");
      // }

      // const ids = redisData.map(item => item.id);
      // const reData = redisData.map(item => item)
      // console.log("data",reData)
      // // console.log("IDs:", ids);
      //
      // for (let i = 0; i< ids.length; i++) {
      //   if (ids === id) {
      //
      //   }
      // }



      // const product = await this.productRepository.findOneBy({
      //   where: { id },
      //   relations: {
      //     seller: true,
      //   },
      // });




  }

  async productDeleteById(id: string) {
    // 캐시에서 데이터를 가져옴
    const redisData = await this.cacheManager.get("products");

    if (redisData !== null) {
      // Redis에서 데이터를 삭제
      await this.cacheManager.del('products');


    }

    // 데이터베이스에서 데이터를 삭제
    await this.productRepository.delete({ id });

    return "deleted";
  }

  async productUpdateById(id: string, createProductDto: CreateProductDto) {
    const redisData = await this.cacheManager.get("products");
    if (redisData !== null) {
      // Redis에서 데이터를 삭제
      await this.cacheManager.del('products');
      console.log("*****", redisData)

    }
    await this.productRepository.update(id, createProductDto);

    return 'updated product';
  }
}
