import fetchFeatured from '../../api/products/fetchFeatured';

export const featuredQuery = () => {
  return {
    queryKey: ['featuredProducts'],
    queryFn: fetchFeatured,
  };
};

export const landingLoader = (queryClient) => async () => {
  try {
    return await queryClient.ensureQueryData(featuredQuery());
  } catch (e) {
    console.error(e);
    return null;
  }
};
