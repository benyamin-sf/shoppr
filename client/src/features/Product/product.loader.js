import fetchProduct from '../../api/products/fetchSingleProduct';

export const productQuery = (id) => {
  return {
    queryKey: ['product', id],
    queryFn: () => fetchProduct(id),
  };
};

export const productLoader =
  (queryClient) =>
  async ({ params }) => {
    try {
      if (!params.productId) throw new Error('no product ID was found!');
      return await queryClient.ensureQueryData(productQuery(params.productId));
    } catch (e) {
      console.error(e);
      return null;
    }
  };
