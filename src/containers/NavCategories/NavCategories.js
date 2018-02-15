import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './NavCategories.css';

// NavCategories.propTypes = {

// };

class NavCategories extends Component {
  render() {
    return (
      <nav className='NavCategories'>
        <NavLink to='/home/music'>
          Music
        </NavLink>
        <NavLink to='/home/food'>
          Food
        </NavLink>
        <NavLink to='/home/culture'>
          Culture
        </NavLink>
        <NavLink to='/home/nightlife'>
          Nightlife
        </NavLink>
      </nav>
    )
  }
}

export default NavCategories;