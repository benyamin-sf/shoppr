import SectionTitle from './SectionTitle';
import ProductsGrid from './ProductsGrid';

export default function FeaturedProducts({ data }) {
  return (
    <div className='pt-24'>
      <SectionTitle text='featured products' />
      <ProductsGrid data={data} />
    </div>
  );
}
