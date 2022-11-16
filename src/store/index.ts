import { createStore, persist } from 'easy-peasy';

import postsStore, { PostModel } from './posts';
import userStore, { UserModel } from './user';

export interface StoreModel {
  userStore: UserModel;
  postsStore: PostModel;
}

const store = createStore<StoreModel>({
  userStore: persist(userStore),
  postsStore: persist(postsStore)
});

export default store;
