import React, { Component } from 'react';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchWelcome from '../SearchWelcome/SearchWelcome';
import './Welcome.css';

// can probably make Welcome into a Component -- won't need to connect with store
class Welcome extends Component {
  handleReroute = () => {
    return this.props.history.push('/home');
  }

  render() {
    return (
      <section className='Welcome'>
        <section className='bg-img half-page'>
        </section>
        <section className='half-page'>
        </section>
        <SearchWelcome onReroute={this.handleReroute} />
      </section>
    )
  }
}

Welcome.propTypes = {
  history: PropTypes.object,
};

export default Welcome;