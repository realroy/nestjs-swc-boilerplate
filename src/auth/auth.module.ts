import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { AuthController } from './auth.controller';
import { UsersController } from './users.controller';

import { ValidateUserService } from './validate-user.service';
import { QueryUserService } from './query-user.service';
import { LocalStrategy } from './local.strategy';
import { LoginService } from './login.service';
import { JWT_SECRET } from './auth.constanst';
import { JWT_EXPIRES_IN } from './auth.config';
import { JwtStrategy } from './jwt.strategy';
import { RegisterService } from './register.service';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: JWT_SECRET,
      signOptions: { expiresIn: JWT_EXPIRES_IN },
    }),
  ],
  controllers: [AuthController, UsersController],
  providers: [
    ValidateUserService,
    QueryUserService,
    LocalStrategy,
    LoginService,
    JwtStrategy,
    RegisterService,
  ],
})
export class AuthModule {}
