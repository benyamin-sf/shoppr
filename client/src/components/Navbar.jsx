import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsSunFill, BsMoonFill, BsCart } from 'react-icons/bs';
import { FaBarsStaggered } from 'react-icons/fa6';

import NavLinks from './NavLinks';

const themes = {
  CORPORATE: 'corporate',
  BUSINESS: 'business',
};

const getTheme = () => {
  return localStorage.getItem('theme') || themes.CORPORATE;
};

export default function Navbar() {
  const [theme, setTheme] = useState(getTheme());

  const toggleTheme = () => {
    const { CORPORATE, BUSINESS } = themes;
    const newTheme = theme === CORPORATE ? BUSINESS : CORPORATE;
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className='bg-base-200'>
      <div className='navbar centered'>
        <div className='navbar-start'>
          {/* LOGO */}
          <NavLink
            to='/'
            className='hidden lg:flex btn btn-primary text-3xl items-center'
          >
            S
          </NavLink>
          {/* DROPDOWN */}
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <FaBarsStaggered className='h-6 w-6' />
            </label>
            <ul className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-48'>
              <NavLinks />
            </ul>
          </div>
        </div>

        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal'>
            <NavLinks />
          </ul>
        </div>

        <div className='navbar-end'>
          {/* THEME TOGGLE */}
          <label className='swap swap-rotate'>
            <input type='checkbox' onChange={toggleTheme} />
            {/* LIGHT THEME ICON */}
            <BsSunFill className='swap-on w-5 h-5' />
            {/* DARK THEME ICON */}
            <BsMoonFill className='swap-off w-5 h-5' />
          </label>
          {/* CART ICON */}
          <NavLink to='/cart' className='btn btn-ghost btn-circle btn-md ml-4'>
            <div className='indicator'>
              <BsCart className='w-6 h-6' />
              <span className='badge badge-sm badge-primary indicator-item'>
                3
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
