import { useLoaderData } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { FeaturedProducts, Hero } from '../../components';
import fetchFeatured from '../../api/products/fetchFeatured';

export default function Landing() {
  const { data } = useQuery({
    queryKey: ['featuredLanding'],
    queryFn: fetchFeatured,
    initialData: useLoaderData(),
  });

  return (
    <>
      <Hero />
      <FeaturedProducts data={data} />
    </>
  );
}
