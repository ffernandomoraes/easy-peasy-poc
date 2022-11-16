import { memo } from 'react';

import { UserOutlined } from '@ant-design/icons';
import { Typography, Comment, Avatar, Button } from 'antd';

import generatePosts from '@/helpers/generatePosts';
import { useStoreActions, useStoreState } from '@/hooks/useStore';
import { User } from '@/interfaces/user';
import { users } from '@/mock';

function Dashboard() {
  const { userData } = useStoreState(state => state?.userStore);
  const { postsData } = useStoreState(state => state?.postsStore);
  const { setPosts } = useStoreActions(actions => actions?.postsStore);

  const findUser = (id: number) => users.find(user => user.id === id);

  const handleGeneratePosts = () => setPosts(generatePosts(userData as User, 5));

  return (
    <div className='page-dashboard'>
      <Typography.Title level={2}>Posts another users ({postsData.length})</Typography.Title>

      {postsData.length === 0 && <div>Data not found</div>}

      {postsData.map((post, index) => (
        <div key={index} className='post'>
          <Comment
            actions={[
              <span key='favorite-nested-reply-to'>Favorite</span>,
              <span key='comment-nested-reply-to'>Reply to</span>
            ]}
            author={findUser(post.userId)?.name}
            avatar={<Avatar size={40} icon={<UserOutlined />} />}
            content={post.content}
          />
        </div>
      ))}

      <br />

      <Button type='primary' onClick={handleGeneratePosts}>
        Generate new posts
      </Button>
    </div>
  );
}

export default memo(Dashboard);
