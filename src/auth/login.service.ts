import { Injectable } from '@nestjs/common';
import { UserModel } from './user.model';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class LoginService {
  constructor(private readonly jwtService: JwtService) {}

  async call(user: Pick<UserModel, 'username' | 'id'>) {
    const payload = { username: user.username, sub: user.id };

    const accessToken = await this.jwtService.signAsync(payload);

    return { accessToken };
  }
}
