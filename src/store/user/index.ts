import { action, computed } from 'easy-peasy';

import { UserModel as ModelUser } from './model';

const userStore: ModelUser = {
  user: null,
  userData: computed(state => state.user),
  setUser: action((state, payload) => {
    state.user = payload;
  })
};

export type UserModel = ModelUser;
export default userStore;
