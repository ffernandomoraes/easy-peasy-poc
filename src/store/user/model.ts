import { Action, Computed } from 'easy-peasy';

import { User } from '@/interfaces/user';

export interface UserModel {
  user: Partial<User> | null;
  userData: Computed<this, this['user']>;
  setUser: Action<this, this['user']>;
}
