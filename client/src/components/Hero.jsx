import { Link } from 'react-router-dom';

import hero1 from '../assets/hero1.webp';
import hero2 from '../assets/hero2.webp';
import hero3 from '../assets/hero3.webp';
import hero4 from '../assets/hero4.webp';

const carouselImages = [hero1, hero2, hero3, hero4];

export default function Hero() {
  return (
    <div className='grid lg:grid-cols-2 gap-24 items-center'>
      <div className=''>
        <h1 className='max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl'>
          Shoppr shapes the way you shop
        </h1>
        <p className='mt-8 max-w-xl text-lg leading-8'>
          Discover a smarter, smoother, and more secure way to shop. With
          personalized experiences, seamless checkout, and handpicked quality —
          Shoppr is built to make every purchase feel effortless. Your style,
          your speed, your shop.
        </p>
        <div className='mt-10'>
          <Link to='/products' className='btn btn-accent uppercase'>
            See our products
          </Link>
        </div>
      </div>
      <div className='hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-accent rounded-lg'>
        {carouselImages.map((img) => {
          return (
            <div key={img} className='carousel-item'>
              <img
                src={img}
                alt='carousel image'
                className='rounded-lg h-full w-80 object-cover'
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
