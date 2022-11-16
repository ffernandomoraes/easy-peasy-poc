import { memo } from 'react';

import { UserOutlined } from '@ant-design/icons';
import { Avatar, List, Typography } from 'antd';

import styled, { css, StyledProp } from '@eduzz/houston-ui/styled';

import generatePosts from '@/helpers/generatePosts';
import { useStoreActions } from '@/hooks/useStore';
import { User } from '@/interfaces/user';
import { users } from '@/mock';

const Accounts = ({ className }: StyledProp) => {
  const { setUser } = useStoreActions(actions => actions?.userStore);
  const { setPosts } = useStoreActions(actions => actions?.postsStore);

  const handleSetData = (user: User) => {
    const filteredPosts = generatePosts(user, 5);
    setUser(user);
    setPosts(filteredPosts);
  };

  return (
    <div className={className}>
      <Typography.Title level={3}>Selecione uma conta</Typography.Title>

      <List
        className='list'
        itemLayout='horizontal'
        dataSource={users}
        renderItem={item => (
          <List.Item onClick={() => handleSetData(item)}>
            <List.Item.Meta
              avatar={<Avatar size={40} icon={<UserOutlined />} />}
              title={item.name}
              description={item.email}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default memo(
  styled(Accounts)(
    () => css`
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      h3 {
        margin-bottom: 20px;
      }

      .list {
        width: 300px;

        .ant-list-item {
          cursor: pointer;
          padding: 20px;
          border-radius: 4px;

          &:hover {
            background-color: #f5f5f5;
          }
        }
      }
    `
  )
);
