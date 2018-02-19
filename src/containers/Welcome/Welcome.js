import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { getGeoLocation } from '../../helper'
import { currentLocationFetchData } from '../../actions/';
import SearchWelcome from '../SearchWelcome/SearchWelcome';
import './Welcome.css';

// can probably make Welcome into a Component -- won't need to connect with store
class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: {}
    }
  }

  componentDidMount = () => {
    // instead of calling this here, call a map to prop action here
    // make an action that calls getGeoLocation, if that is successful, pass that down as prop
    // if that is unsucessful, handle it in Redux 
    // const coords = await getGeoLocation();
    // if this is successful do this, otherwise setState to an error
    const { fetchCurrentLocation, currentLocation } = this.props;

    fetchCurrentLocation();

    this.setState({ currentLocation })
  }

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

const mapStateToProps = (state) => ({
  currentLocation: state.currentLocation,
})

const mapDispatchToProps = (dispatch) => ({
  fetchCurrentLocation: () => dispatch(currentLocationFetchData())
})

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);