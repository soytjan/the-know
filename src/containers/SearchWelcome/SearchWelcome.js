import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { getCityData, 
  cleanEventData, 
  initialFetchWithCoords,
  getAddressCoords,
  cleanAddressCoords,
  getCityDataWithCoords } from '../../helper';
import { addEvents, addLocation } from '../../actions/';
import './SearchWelcome.css';
// var geocoder = require('geocoder');
// var NodeGeocoder = require('node-geocoder');

// SearchWelcome.propTypes = {

// };

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
      const jsonCoordinates = await getAddressCoords(location);
      const cleanLocation = cleanAddressCoords(jsonCoordinates);
      const jsonCityData = await getCityDataWithCoords(cleanLocation);
      const events = cleanEventData(jsonCityData);
      this.props.addEvents(events);
      this.props.addLocation(cleanLocation);
      localStorage.setItem('location', cleanLocation.address); 
      this.props.onReroute()
    } catch (error) {
      this.setState({ error: true })
    } 
  }

  // need to make a function using the coordinates
  handleCurrentLocation = async () => {
    try {
      const { currentLocation, addEvents, onReroute } = this.props;
      const jsonResponse = await initialFetchWithCoords(currentLocation);
      const events = await cleanEventData(jsonResponse);

      addEvents(events);
      onReroute();
    } catch (error) {
      this.setState({ error: true })
    }
  }

  // convertAddressToCoordinates = () => {
  //   // console.log('location', this.state.location)
  //   // geocoder.geocode(this.state.location, function (err, data) {
  //   //   const results = data;
  //   //   debugger;

  //   // })
  //   var options = {
  //     provider: 'google',
  //     httpAdapter: 'https',
  //     apiKey: 'AIzaSyDvXq3Ia5_KRgpVZ4QEvopD_X7wzJ07nYE',
  //     formatter: null
  //   }

  //   var geocoder = NodeGeocoder(options);

  //   geocoder.geocode('29 champs elysée paris')
  // .then(function(res) {
  //   console.log(res);
  // })
  // .catch(function(err) {
  //   console.log(err);
  // });
  // }

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

const mapStateToProps = (state) => ({
  currentLocation: state.currentLocation
});

const mapDispatchToProps = (dispatch) => ({
  addEvents: events => dispatch(addEvents(events)),
  addLocation: location => dispatch(addLocation(location))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchWelcome);