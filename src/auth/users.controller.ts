import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';

import { AuthorizedReq } from './auth.types';
import { LoginService } from './login.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';
import { RegisterService } from './register.service';

class RegisterUserDto {
  username: string;
  password: string;
}

@Controller('users')
export class UsersController {
  constructor(
    private readonly registerService: RegisterService,
    private readonly loginService: LoginService,
  ) {}

  @Post('register')
  async register(@Body() body: RegisterUserDto) {
    return this.registerService.call(body);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req: AuthorizedReq) {
    return this.loginService.call(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Post('me')
  me(@Req() req: AuthorizedReq) {
    return req.user;
  }
}
