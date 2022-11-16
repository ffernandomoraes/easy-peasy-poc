import { memo } from 'react';
import { Link } from 'react-router-dom';

import Layout from '@eduzz/houston-ui/Layout';

import generatePosts from '@/helpers/generatePosts';
import { useStoreActions, useStoreState } from '@/hooks/useStore';
import { User } from '@/interfaces/user';
import { users } from '@/mock';
import store from '@/store';

const { Topbar } = Layout;

function Toolbar() {
  const { userData } = useStoreState(state => state?.userStore);
  const { setUser } = useStoreActions(actions => actions?.userStore);
  const { setPosts } = useStoreActions(actions => actions?.postsStore);

  const handleSetData = (user: User) => {
    const filteredPosts = generatePosts(user, 5);
    setUser(user);
    setPosts(filteredPosts);
  };

  const handleLogout = () => {
    setUser(null);
    store.persist.clear();
  };

  return (
    <Topbar
      disableApps
      user={userData as User}
      logo='https://easy-peasy.dev/assets/img/logo-small.fa11c63f.png'
      logoMobile='https://easy-peasy.dev/assets/img/logo-small.fa11c63f.png'
    >
      <Topbar.UserMenu>
        <Topbar.UserMenuItem as={Link} to='/profile'>
          Profile
        </Topbar.UserMenuItem>
        <Topbar.UserMenuGroup label='Change account:'>
          {users.map(user => (
            <Topbar.UserMenuItem disabled={user.id === userData?.id} key={user.id} onClick={() => handleSetData(user)}>
              {user.name}
            </Topbar.UserMenuItem>
          ))}
          <Topbar.UserMenuDivider />
          <Topbar.UserMenuItem onClick={() => handleLogout()}>Logout</Topbar.UserMenuItem>
        </Topbar.UserMenuGroup>
      </Topbar.UserMenu>
    </Topbar>
  );
}

export default memo(Toolbar);
