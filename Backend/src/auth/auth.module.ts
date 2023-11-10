import { Module } from '@nestjs/common';
import { UsersModule } from '@users/users.module';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { EmailModule } from '@email/email.module';
import { AuthController } from '@auth/auth.controller';
import { AuthService } from '@auth/auth.service';
import { LocalAuthStrategy } from '@auth/strategies/local-auth.strategy';
import { JwtAuthStrategy } from '@auth/strategies/jwt-auth.strategy';
import { KakaoAuthStrategy } from '@auth/strategies/kakao-auth.strategy';
import { NaverAuthStrategy } from '@auth/strategies/naver-auth.strategy';
import { GoogleAuthStrategy } from '@auth/strategies/google-auth.strategy';

@Module({
  imports: [
    UsersModule,
    ConfigModule,
    JwtModule.register({}),
    PassportModule,
    EmailModule,
  ], //service형태로 내보냄
  controllers: [AuthController],
  providers: [
    AuthService,
    LocalAuthStrategy,
    GoogleAuthStrategy,
    JwtAuthStrategy,
    KakaoAuthStrategy,
    NaverAuthStrategy,
  ],
})
export class AuthModule {}
