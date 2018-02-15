import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import SearchWelcome from '../SearchWelcome/SearchWelcome';
import './Welcome.css';

// Welcome.propTypes = {

// };

class Welcome extends Component {
  render() {
    return (
      <section className='Welcome'>
        <section className='bg-img half-page'>
        </section>
        <section className='half-page'>
        </section>
        <SearchWelcome />
      </section>
    )
  }
}

export default Welcome;