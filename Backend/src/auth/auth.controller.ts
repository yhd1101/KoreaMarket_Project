import {
  Body,
  Controller,
  Post,
  HttpCode,
  UseGuards,
  Req,
  Get,
  HttpStatus,
  Query,
  Param,
  Res,
  NotFoundException,
} from '@nestjs/common';

import {
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { User } from '../users/entities/user.entity';
import { AuthService } from '@auth/auth.service';
import { CreateUserDto } from '@users/dto/create-user.dto';
import { ConfirmEmailDto } from '@users/dto/confirm-email.dto';
import { LoginUserDto } from '@users/dto/login-user.dto';
import { LocalAuthGuard } from '@auth/guards/local-auth.guard';
import { RequestWithUserInterface } from '@auth/interfaces/requestWithUser.interface';
import { JwtAuthGuard } from '@auth/guards/jwt-auth.guard';
import { ChangePasswordDto } from '@users/dto/change-password.dto';
import { GoogleAuthGuard } from '@auth/guards/google-auth.guard';
import { KakaoAuthGuard } from '@auth/guards/kakao-auth.guard';
import { NaverAuthGuard } from '@auth/guards/naver-auth.guard';
import { NewPasswordDto } from '@users/dto/new-password.dto';
import { Reservation } from '@reservation/entities/reservation.entity';
import { Response } from 'express';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('1234')
  async test(): Promise<any> {
    return 'ok';
  }

  //회원가입
  @Post('signup')
  @ApiCreatedResponse({
    description: 'the record has been success with user',
    type: User,
  }) //성공시 응답을 해주겠다.
  async userSignup(@Body() createUserDto: CreateUserDto) {
    return await this.authService.createUser(createUserDto);
  }

  @Post('send/email')
  @ApiResponse({
    description: 'email send verify',
  })
  async sendEmail(@Body('email') email: string) {
    return await this.authService.sendEmail(email);
  }

  @Post('confirm/email')
  async confirmEmail(@Body() confirmEmailDto: ConfirmEmailDto) {
    return await this.authService.confirmEmail(confirmEmailDto);
  }
  //로그인 이메일, 비밀번호맞는지 이메일먼저찾기,
  @Post('login')
  @ApiOperation({ summary: '로그인API', description: '로그인해주는 api' })
  @ApiCreatedResponse({ description: '로그인함', type: User })
  @ApiBody({ type: LoginUserDto })
  @HttpCode(200)
  @UseGuards(LocalAuthGuard) //Guard에서 검증됨
  @ApiResponse({
    description: 'login success',
  })
  async userLogin(@Req() req: RequestWithUserInterface) {
    const user = req.user;
    const token = await this.authService.generateAccessToken(user.id);
    return { token, user };
    // return await this.authService.Login(loginUserDto);
  }

  // @Get('/profile')
  // @ApiBearerAuth('access-token')
  // @HttpCode(200)
  // @ApiOperation({ summary: '프로필 정보', description: '프로필 정보' })
  // @UseGuards(JwtAuthGuard)
  // async getUserInfoByToken(
  //   @Query('reservation') reservationQuery?: Reservation,
  // ) {
  //   try {
  //     const data = await this.authService.profile(reservationQuery); // user를 profile 메서드에 전달
  //     return { data };
  //   } catch (err) {
  //     throw new NotFoundException('No Profile');
  //   }
  // }

  @Get('/profile')
  @ApiBearerAuth('access-token')
  @HttpCode(200)
  @ApiOperation({ summary: '프로필정보', description: '프로필정보 api' })
  @UseGuards(JwtAuthGuard)
  async getUserInfoByToken(
    @Req() req: RequestWithUserInterface,
    @Query('reservation') reservationQuery?: Reservation,
  ) {
    const { user } = req;
    const data = await this.authService.profile(user.id, reservationQuery);
    user.password = undefined;
    return { data };
  }

  @Post('forgot/password') //비밀번호 재설정위한 메일전송
  @ApiOperation({
    summary: '비밀번호 재설정을위한 메일전송',
    description: '재설정해줌',
  })
  async forgotPassword(@Body('email') email: string) {
    return await this.authService.forgotPassword(email);
  }

  @Post('change/password') //비밀번호 바꾸기
  @ApiOperation({ summary: '비밀번호 바꾸기', description: '비밀번호 수정' })
  @ApiBody({ type: ChangePasswordDto })
  async changePassword(@Body() changePasswordDto: ChangePasswordDto) {
    return await this.authService.changePassword(changePasswordDto);
  }

  @Post('newpassword')
  @ApiOperation({ summary: '비밀번호 바꾸기', description: '비밀번호 수정' })
  @UseGuards(JwtAuthGuard)
  async newPassword(
    @Body() newPasswordDto: NewPasswordDto,
    @Req() req: RequestWithUserInterface,
  ) {
    const newPassword = newPasswordDto.newPassword;
    const user = req.user.email;
    const updatedUser = await this.authService.changePasswordWithToken(
      user,
      newPassword,
    );
    return updatedUser;
  }

  //구글에 접속하는 코드(로그인요청 코드)
  @HttpCode(200)
  @Get('google')
  @UseGuards(GoogleAuthGuard)
  async googleLogin(): Promise<any> {
    console.log('google');
    return HttpStatus.OK;
  }
  //
  @HttpCode(200)
  @Get('google/callback')
  @UseGuards(GoogleAuthGuard)
  async googleLoginCallBack(
    @Req() req: RequestWithUserInterface,
    @Res() res: Response,
  ): Promise<any> {
    const { user } = req;
    const token = await this.authService.generateAccessToken(user.id);
    const mainPageUrl = 'http://localhost:3000';
    // 사용자에게 로그인이 완료되었음을 안내하는 메시지를 표시
    const script = `
    <script>
      window.localStorage.setItem('user', '${JSON.stringify(user)}');
      window.localStorage.setItem('token', '${token}');
      window.opener.postMessage('loginComplete', '${mainPageUrl}');
      alert('Login completed. You can now close this window.');
    </script>
  `;

    res.send(script);
    res.send(script);
  }

  @HttpCode(200)
  @Get('kakao')
  @UseGuards(KakaoAuthGuard)
  async kakaoLogin(): Promise<any> {
    return HttpStatus.OK;
  }

  @HttpCode(200)
  @Get('kakao/callback')
  @UseGuards(KakaoAuthGuard)
  async kakaoLoginCallBack(@Req() req: any): Promise<any> {
    const { user } = req;
    const token = await this.authService.generateAccessToken(user.id);
    return { token, user };
  }

  //naver
  @HttpCode(200)
  @Get('naver')
  @UseGuards(NaverAuthGuard)
  async naverLogin(): Promise<any> {
    return HttpStatus.OK;
  }
  @HttpCode(200)
  @Get('naver/callback')
  @UseGuards(NaverAuthGuard)
  async naverLoginCallBack(@Req() req: any): Promise<any> {
    const { user } = req;
    return user;
  }
}
