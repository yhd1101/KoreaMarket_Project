import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@users/entities/user.entity';
import { UsersController } from '@users/users.controller';
import { UsersService } from '@users/users.service';
import { LocalFilesModule } from '@root/local-files/local-files.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), LocalFilesModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService], //UserService를 내보냄
})
export class UsersModule {}
