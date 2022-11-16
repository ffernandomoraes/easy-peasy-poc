import { memo } from 'react';
import { useLocation, Outlet, Link } from 'react-router-dom';

import LayoutHouston from '@eduzz/houston-ui/Layout';

import Toolbar from './Topbar';

const { Sidebar, Content: LayoutContent } = LayoutHouston;
const { Item } = Sidebar;

function Layout() {
  const location = useLocation();

  return (
    <LayoutHouston>
      <Toolbar />

      <Sidebar currentLocation={location.pathname}>
        <Item to='/' as={Link}>
          Posts
        </Item>
        <Item to='/profile' as={Link}>
          Profile
        </Item>
      </Sidebar>

      <LayoutContent>
        <Outlet />
      </LayoutContent>
    </LayoutHouston>
  );
}

export default memo(Layout);
