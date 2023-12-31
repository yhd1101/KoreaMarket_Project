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
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from '@users/users.service';
import { CreateUserDto } from '@users/dto/create-user.dto';
import { JwtAuthGuard } from '@auth/guards/jwt-auth.guard';
import { RequestWithUserInterface } from '@auth/interfaces/requestWithUser.interface';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Express } from 'express';
import LocalFilesInterceptors from '@common/interceptors/localFiles.interceptors';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  //회원가입 전체를 불러옴
  // @Get()
  // async getAllUsers() {
  //   const users = await this.usersService.userGetAll();
  //   return users;
  // }
  //회원가입
  @Post('/create')
  async postSignup(@Body() createUserDto: CreateUserDto) {
    const newSignup = await this.usersService.CreateUser(createUserDto);
    return newSignup;
  }

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    const user = await this.usersService.getUserById(id);
    return user;
  }

  //프로필이미지 수정
  @Post('avatar')
  @UseGuards(JwtAuthGuard)
  // @UseInterceptors(
  //   FileInterceptor('file', {
  //     storage: diskStorage({
  //       destination: './uploadedFiles/avatars',
  //     }),
  //   }),
  // )
  @UseInterceptors(
    LocalFilesInterceptors({
      fieldName: 'file',
      path: '/avatars',
    }),
  )
  async addAvatar(
    @Req() req: RequestWithUserInterface,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.usersService.addAvatar(req.user.id, {
      path: file.path,
      filename: file.originalname,
      mimetype: file.mimetype,
    });
  }
}
