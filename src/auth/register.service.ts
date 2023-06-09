import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

type Options = {
  username: string;
  password: string;
};

@Injectable()
export class RegisterService {
  constructor(private readonly prismaService: PrismaService) {}

  call(options: Options) {
    return this.prismaService.user.create({
      data: {
        username: options.username,
        password: options.password,
      },
    });
  }
}
