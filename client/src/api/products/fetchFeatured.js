import axios from '../../utils/customAxios';

export default async function getFeaturedProducts() {
  const response = await axios.get('/products?featured=true');
  return response.data?.data;
}
