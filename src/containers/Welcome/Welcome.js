import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { currentLocationFetchData } from '../../actions/';
import SearchWelcome from '../SearchWelcome/SearchWelcome';
import './Welcome.css';

class Welcome extends Component {
  componentDidMount = () => {
    const { fetchCurrentLocation, currentLocation } = this.props;

    fetchCurrentLocation();
  }

  handleReroute = () => {
    return this.props.history.push('/home');
  }

  render() {
    // look into doing some sort of React alert here
    if (this.props.currentHasErrored) {
      return alert('There has a been error finding your location!')
    }

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

const mapStateToProps = (state) => ({
  currentLocation: state.currentLocation,
  currentHasErrored: state.currentHasErrored
})

const mapDispatchToProps = (dispatch) => ({
  fetchCurrentLocation: () => dispatch(currentLocationFetchData())
})

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);