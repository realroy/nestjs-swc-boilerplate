import type { UserModel } from './user.model';

export type AuthorizedReq = Request & {
  user: Pick<UserModel, 'id' | 'username'>;
};
