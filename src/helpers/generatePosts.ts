import { User } from '@/interfaces/user';
import { feed, users } from '@/mock';

import generateRandomNumber from './generateRandomNumber';

export default function generatePosts(user: User, maxPosts = 10) {
  return new Array(maxPosts)
    .fill(feed)
    .map(post => ({ id: generateRandomNumber(1, 1000), userId: generateRandomNumber(1, users.length), ...post }))
    .filter(post => post.userId !== user.id);
}
