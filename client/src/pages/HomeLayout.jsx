import { Outlet } from 'react-router-dom';

import { Navbar, TopHeader } from '../components';

export default function HomeLayout() {
  return (
    <main id='main'>
      <TopHeader />
      <Navbar />
      <section className='centered py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 2xl:py-20'>
        <Outlet />
      </section>
    </main>
  );
}
