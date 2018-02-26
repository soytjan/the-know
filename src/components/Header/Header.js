import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

// add in NavLink tags but will need to set up the routes
const Header = () => {
  return (
    <header className="Header">
      <h1><NavLink to='/home'>THE KNOW</NavLink></h1>
      <div className='header-link-cont'>
        <div className='header-link-box'>
          <NavLink to='/home/favorites'>FAVORITES</NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;