import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getGeoLocation } from '../../helper';
import { addCurrentLocation, } from '../../actions/';
import SearchWelcome from '../SearchWelcome/SearchWelcome';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import './Welcome.css';

export class Welcome extends Component {
  componentDidMount = async () => {
    const { addCurrentLocation } = this.props;
    const currentLocation = await getGeoLocation();

    addCurrentLocation(currentLocation);
  }

  handleReroute = () => {
    return this.props.history.push('/home');
  }

  render() {
    // look into doing some sort of React alert here

    return (
      <section className='Welcome'>
        <section className='bg-img half-page'>
        </section>
        <section className='half-page'>
        </section>
        <ErrorBoundary>
          <SearchWelcome onReroute={this.handleReroute} />
        </ErrorBoundary>
      </section>
    )
  }
}

Welcome.propTypes = {
  history: PropTypes.object,
};

const mapDispatchToProps = (dispatch) => ({
  addCurrentLocation: location => dispatch(addCurrentLocation(location))
})

export default connect(null, mapDispatchToProps)(Welcome);