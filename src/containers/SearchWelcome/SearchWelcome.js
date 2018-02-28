import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAndCleanGeocodeLocation, fetchAndCleanReverseGeocodeLocation } from '../../helper';
import { addEvents, addLocation } from '../../actions/';
import './SearchWelcome.css';

export class SearchWelcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ''
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { location } = this.state;
    const { addLocation, onReroute } = this.props;
    const geocodeLocation = await fetchAndCleanGeocodeLocation(location);
    addLocation(geocodeLocation);
    onReroute();
  }

  handleCurrentLocation = async () => {
    const { currentLocation, addLocation, onReroute } = this.props;
    const updatedLocation = await fetchAndCleanReverseGeocodeLocation(currentLocation.coordinates)
    
    addLocation(updatedLocation);
    onReroute();  
  }

  render() {
    return (
      <article className='SearchWel'>
        <h2>What's going on in...</h2>
        <h3>(Where ya at?)</h3>
        <button 
          className='current-btn'
          onClick={this.handleCurrentLocation}
        >
          USE MY CURRENT LOCATION
        </button>
        <p>- OR -</p>
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
    );
  }
}

SearchWelcome.propTypes = {
  currentLocation: PropTypes.object,
  addEvents: PropTypes.func,
  addLocation: PropTypes.func,
  onReroute: PropTypes.func
};

export const mapStateToProps = (state) => ({
  currentLocation: state.currentLocation
});

export const mapDispatchToProps = (dispatch) => ({
  addEvents: events => dispatch(addEvents(events)),
  addLocation: location => dispatch(addLocation(location))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchWelcome);