import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { 
  cleanEventData, 
  getAddressCoords,
  cleanAddressCoords,
  fetchCityData } from '../../helper';
import { addEvents, addLocation } from '../../actions/';
import './SearchWelcome.css';

export class SearchWelcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      error: false,
    }
  }

  // componentDidMount -- check and see if there is anything in localStorage and check for geobase location

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  }

  // look into moving this into the Redux store?
  // need to come up with a way of handling loading time and error
  // -- eventsLoading in Redux? eventsErrored? 

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { location } = this.state;
      const { addEvents, addLocation, onReroute } = this.props;
      const geocodeLocation = await this.fetchGeocodeAddress(location);
      const events = await this.fetchAndCleanEventData(geocodeLocation);

      this.storeDataAndReroute(events, geocodeLocation);
    } catch (error) {
      this.setState({ error: true })
    } 
  }

  handleCurrentLocation = async () => {
    try {
      const { currentLocation } = this.props;
      const events = await this.fetchAndCleanEventData(currentLocation);

      this.storeDataAndReroute(events, currentLocation);
    } catch (error) {
      this.setState({ error: true })
    }
  }

  fetchGeocodeAddress = async (location) => {
    const jsonResponse = await getAddressCoords(location);
    const geocodeLocation = cleanAddressCoords(jsonResponse);

    return geocodeLocation;
  }

  fetchAndCleanEventData = async (location) => {
    const jsonResponse = await fetchCityData(location);
    const events = cleanEventData(jsonResponse);
 
    return events;
  }

  storeDataAndReroute = (events, location) => {
    const { addEvents, addLocation, onReroute } = this.props;

    addEvents(events);
    addLocation(location);
    localStorage.setItem('location', location.address);
    onReroute();
  }


  render() {
    return (
      <article className='SearchWel'>
        <h2>Discover your city</h2>
        <button onClick={this.handleCurrentLocation}>Use my current location</button>
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

SearchWelcome.propTypes = {
  currentLocation: PropTypes.object,
  addEvents: PropTypes.func,
  addLocation: PropTypes.func,
  onReroute: PropTypes.func,

};

const mapStateToProps = (state) => ({
  currentLocation: state.currentLocation
});

const mapDispatchToProps = (dispatch) => ({
  addEvents: events => dispatch(addEvents(events)),
  addLocation: location => dispatch(addLocation(location))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchWelcome);