import fetchFeatured from '../../api/products/fetchFeatured';

export default async function landingLoader() {
  const featuredProducts = await fetchFeatured();
  return featuredProducts;
}
