import { NavLink } from 'react-router-dom';

const links = [
  { id: 1, url: '/', title: 'home' },
  { id: 2, url: '/about', title: 'about' },
  { id: 3, url: '/products', title: 'products' },
  { id: 4, url: '/cart', title: 'cart' },
  { id: 5, url: '/checkout', title: 'checkout' },
  { id: 6, url: '/orders', title: 'orders' },
];

export default function NavLinks() {
  return (
    <>
      {links.map((ln) => {
        return (
          <li key={ln.id}>
            <NavLink to={ln.url} className='capitalize'>
              {ln.title}
            </NavLink>
          </li>
        );
      })}
    </>
  );
}
