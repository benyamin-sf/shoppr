import { Outlet } from 'react-router-dom';

import { Navbar } from '../components';

export default function HomeLayout() {
  return (
    <main id='main'>
      <Navbar />
      <Outlet />
    </main>
  );
}
