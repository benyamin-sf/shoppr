import axios from '../../utils/customAxios';

export default async function getFeaturedProducts(id) {
  const { data } = await axios.get(`/products/${id}`);
  return data?.data;
}
