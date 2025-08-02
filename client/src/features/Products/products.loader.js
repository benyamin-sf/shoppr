import fetchFeatured from '../../api/products/fetchFeatured';

// query functions
export const productsQuery = () => {};

export const featuredQuery = () => {
  return {
    queryKey: ['featuredProducts'],
    queryFn: fetchFeatured,
  };
};

// loaders
export const featuredProductsLoader = (queryClient) => async () => {
  try {
    return await queryClient.ensureQueryData(featuredQuery());
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const productsLoader = (queryClient) => async () => {
  try {
    return await queryClient.ensureQueryData(productsQuery());
  } catch (e) {
    console.error(e);
    return null;
  }
};
