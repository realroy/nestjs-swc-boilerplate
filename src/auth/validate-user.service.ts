import { Injectable } from '@nestjs/common';
import { UserModel } from './user.model';

export type ValidateUserOptions = {
  user: UserModel;
  password: string;
};

@Injectable()
export class ValidateUserService {
  async call({ user, password }: ValidateUserOptions) {
    if (!user || user.password !== password) {
      return null;
    }

    return user;
  }
}
