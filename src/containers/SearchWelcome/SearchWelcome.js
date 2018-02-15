import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import './SearchWelcome.css';

// SearchWelcome.propTypes = {

// };

class SearchWelcome extends Component {
  constructor() {
    super();
    this.state = {
      location: '',
    }
  }

  render() {
    return (
      <article className='SearchWel'>
        <h2>Discover your city</h2>
        <form>
          <input 
            type="text"
            placeholder='Enter your city or location'
            className='input-wel'
          />
          <button className='btn-wel-search'>SEARCH</button>
        </form>
      </article>
    )
  }
}

export default SearchWelcome;