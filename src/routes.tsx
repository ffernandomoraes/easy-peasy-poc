import { useRoutes } from 'react-router-dom';

import Layout from '@/components/Layout';
import { useStoreState } from '@/hooks/useStore';
import Dashboard from '@/pages/Dashboard';
import Profile from '@/pages/Profile';

import Accounts from './pages/Accounts';

export default function Routes() {
  const { userData } = useStoreState(state => state?.userStore);

  const routes = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          path: '/',
          element: <Dashboard />
        },
        { path: 'profile', element: <Profile /> }
      ]
    }
  ]);

  if (!userData) {
    return <Accounts />;
  }

  return routes;
}
