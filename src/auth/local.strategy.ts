import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

import { QueryUserService } from './query-user.service';
import { ValidateUserService } from './validate-user.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly queryUserService: QueryUserService,
    private readonly validateUserService: ValidateUserService,
  ) {
    super();
  }

  async validate(username: string, password: string) {
    const matchedUser = await this.queryUserService.call(username);

    if (!matchedUser) {
      throw new UnauthorizedException();
    }

    try {
      await this.validateUserService.call({
        user: matchedUser,
        password,
      });
    } catch (error) {
      throw new UnauthorizedException();
    }

    return {
      id: matchedUser.id,
      username: matchedUser.username,
    };
  }
}
