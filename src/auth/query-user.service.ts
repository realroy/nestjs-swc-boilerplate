import { Injectable } from '@nestjs/common';

import type { UserModel } from './user.model';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class QueryUserService {
  constructor(private prisma: PrismaService) {}

  call(username: UserModel['username']) {
    return this.prisma.user.findFirst({ where: { username } });
  }
}
