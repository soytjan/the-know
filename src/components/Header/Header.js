import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

// add in NavLink tags but will need to set up the routes
const Header = () => {
  return (
    <header className="Header">
      <h1>THE KNOW</h1>
      <div className='header-link-cont'>
        <div className='header-link-box'>
          <NavLink to='/signup'>SIGN UP</NavLink>
        </div>
        <div className='header-link-box'>
          <NavLink to='/login'>LOGIN</NavLink>
        </div>
      </div>
    </header>
  )
}

export default Header;