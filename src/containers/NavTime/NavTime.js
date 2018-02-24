import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';
import './NavTime.css';

class NavTime extends Component {
  render() {
    return (
      <nav className='NavTime'>
        <NavLink to='/home/today'>Today</NavLink>
        <NavLink to='/home/week'>This Week</NavLink>
        <NavLink to='/home/weekend'>This Weekend</NavLink>
        <NavLink to='/home/next30days'>This Month</NavLink>
        <NavLink to='/home/future'>All Upcoming</NavLink>
      </nav>
    )
  }
}

// NavTime.propTypes = {

// };


export default NavTime;