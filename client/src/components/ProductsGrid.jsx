import { Link } from 'react-router-dom';

import formatPrice from '../../../shared/utils/formatPrice';

export default function ProductsGrid({ data }) {
  return (
    <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {data.map((product) => {
        const { title, price, image } = product.attributes;

        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className='card w-full shadow-[0_0_1rem] shadow-base-300 rounded-lg hover:shadow-[0_0.35rem_1.5rem] transition duration-300 hover:scale-105'
          >
            <figure className='px-4 pt-4'>
              <img
                src={image}
                alt={title}
                className='rounded-xl h-64 md:h-48 w-full object-cover border-2 border-accent'
              />
            </figure>
            <div className='card-body items-center text-center'>
              <h2 className='card-title tracking-wider capitalize'>{title}</h2>
              <span className='text-secondary'>{formatPrice(price)}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
