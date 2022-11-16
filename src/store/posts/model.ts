import { Action, Computed } from 'easy-peasy';

import { Posts } from '@/interfaces/posts';

export interface PostModel {
  posts: Posts[];
  postsData: Computed<this, this['posts']>;
  setPosts: Action<this, this['posts']>;
}
