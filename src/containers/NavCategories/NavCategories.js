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
        <NavLink to='/home/music' className='a-category'>
          <button>
            MUSIC
          </button>
        </NavLink>
        <NavLink to='/home/food' className='a-category'>
          <button>
            FOOD
          </button>
        </NavLink>
        <NavLink to='/home/culture' className='a-category'>
          <button>
            CULTURE
          </button>
        </NavLink>
        <NavLink to='/home/nightlife' className='a-category'>
          <button>
            NIGHTLIFE
          </button>
        </NavLink>
      </nav>
    )
  }
}

export default NavCategories;