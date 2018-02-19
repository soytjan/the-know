import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
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

  // look into moving this into the Redux store

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { location } = this.state;
      const { addEvents, addLocation, onReroute } = this.props;
      const jsonCoordinates = await getAddressCoords(location);
      const cleanLocation = cleanAddressCoords(jsonCoordinates);
      const jsonCityData = await fetchCityData(cleanLocation);
      const events = cleanEventData(jsonCityData, 'event');
      addEvents(events);
      addLocation(cleanLocation);
      localStorage.setItem('location', cleanLocation.address); 
      onReroute()
    } catch (error) {
      this.setState({ error: true })
    } 
  }

  handleCurrentLocation = async () => {
    try {
      const { currentLocation, addEvents, addLocation, onReroute } = this.props;
      const jsonResponse = await fetchCityData(currentLocation);
      const events = await cleanEventData(jsonResponse);

      addEvents(events);
      addLocation(currentLocation);
      onReroute();
    } catch (error) {
      this.setState({ error: true })
    }
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

// SearchWelcome.propTypes = {

// };

const mapStateToProps = (state) => ({
  currentLocation: state.currentLocation
});

const mapDispatchToProps = (dispatch) => ({
  addEvents: events => dispatch(addEvents(events)),
  addLocation: location => dispatch(addLocation(location))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchWelcome);