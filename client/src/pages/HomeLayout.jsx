import { Outlet } from 'react-router-dom';

import { Navbar, TopHeader } from '../components';

export default function HomeLayout() {
  return (
    <main id='main'>
      <TopHeader />
      <Navbar />
      <section className='centered'>
        <Outlet />
      </section>
    </main>
  );
}
