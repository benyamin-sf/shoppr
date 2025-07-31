import { useQuery } from '@tanstack/react-query';

import { FeaturedProducts, Hero } from '../../components';
import { featuredQuery } from './landing.loader';

export default function Landing() {
  const { data } = useQuery(featuredQuery());

  return (
    <>
      <Hero />
      <FeaturedProducts data={data} />
    </>
  );
}
