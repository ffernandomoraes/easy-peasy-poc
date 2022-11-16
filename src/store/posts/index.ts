import { action, computed } from 'easy-peasy';

import { PostModel as ModelPost } from './model';

const userStore: ModelPost = {
  posts: [],
  postsData: computed(state => state.posts),
  setPosts: action((state, payload) => {
    state.posts = payload;
  })
};

export type PostModel = ModelPost;
export default userStore;
