import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import './SearchWelcome.css';

// SearchWelcome.propTypes = {

// };

export class SearchWelcome extends Component {
  constructor() {
    super();
    this.state = {
      location: '',
    }
  }

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // make fetch call to api with function from helper
  }

  render() {
    return (
      <article className='SearchWel'>
        <h2>Discover your city</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.location}
            name='location' 
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