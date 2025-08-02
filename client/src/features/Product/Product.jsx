import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { BsCartPlusFill } from 'react-icons/bs';

import { productQuery } from './product.loader';
import formatPrice from '../../../../shared/utils/formatPrice';

const rangeGenerator = (amount) => {
  return Array.from({ length: amount }, (_, i) => ++i);
};

export default function Product() {
  const productParams = useParams();
  const { data } = useQuery(productQuery(productParams?.productId));

  const { title, image, price, description, colors, company } = data.attributes;

  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const formattedPrice = formatPrice(price);
  // hard-coded value (temporary)
  const productStockAmount = 4;

  const onColorChange = (color) => {
    setSelectedColor(color);
  };

  const onAmountChange = (e) => {
    setAmount(parseInt(e.target.value));
  };

  return (
    <section>
      {/* BREADCRUMB */}
      <div className='breadcrumbs text-md'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/products'>Products</Link>
          </li>
        </ul>
      </div>

      {/* PRODUCT */}
      <div className='relative mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
        {/* IMAGE */}
        <div className='w-full h-96 rounded-lg overflow-hidden shadow-[-0.25rem_-0.25rem_0.85rem] shadow-accent mt-16 ml-6 before:content-[""] before:absolute before:top-10 before:left-0 before:w-[512px] before:h-96 before:rounded-lg before:border-4 before:border-accent before:z-[-1]'>
          <img
            src={image}
            alt={title}
            className='w-full h-full object-cover rounded-lg'
          />
        </div>

        {/* INFO */}
        <div className='px-4 sm:px-6 md:px-8 lg:px-10'>
          <h1 className='text-3xl font-bold capitalize'>{title}</h1>
          <h4 className='text-xl text-accent font-bold mt-6 leading-6'>
            <span className='text-current text-xs uppercase'>from:</span>
            <br />
            <span className='ml-2 text-base-content'>{company}</span>
          </h4>
          <p className='bg-accent absolute top-16 right-0 text-xl font-mono tracking-wider px-3 py-1 rounded-box text-accent-content'>
            {formattedPrice}
          </p>
          <p className='mt-4 leading-8'>{description}</p>
          <div className='mt-8 space-y-5'>
            {/* COLORS */}
            <ul className='flex gap-x-1 items-center px-3 py-1.5 border border-accent rounded-box'>
              <h4 className='text-sm font-medium tracking-wider text-neutral-400 mr-7'>
                Colors
              </h4>
              {colors.map((color) => {
                return (
                  <li key={color}>
                    <button
                      type='button'
                      className={`badge w-6 h-6 mr-2 cursor-pointer rounded-full ${
                        color === selectedColor
                          ? 'border-2 border-accent'
                          : undefined
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => onColorChange(color)}
                    ></button>
                  </li>
                );
              })}
            </ul>

            {/* AMOUNT */}
            <label className='select w-full border-accent'>
              <span className='label'>Amount</span>
              <select value={amount} onChange={onAmountChange}>
                {rangeGenerator(productStockAmount).map((a) => (
                  <option key={a} value={a}>
                    {a}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {/* CART ADD BUTTON */}
          <div className='mt-10'>
            <button
              type='button'
              className='btn btn-accent btn-md flex items-center gap-x-2.5 uppercase'
              onClick={() => {
                alert(`${amount} ${title} was added to your cart!`);
              }}
            >
              <BsCartPlusFill className='w-5 h-5' /> add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
