import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAndCleanGeocodeLocation } from '../../helper';
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

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { location } = this.state;
    const { addLocation, onReroute } = this.props;
    const geocodeLocation = await fetchAndCleanGeocodeLocation(location, 'event');
    addLocation(geocodeLocation);
    localStorage.setItem('location', geocodeLocation.address);
    onReroute();
  }

  handleCurrentLocation = async () => {
    const { currentLocation, onReroute } = this.props;
    
    addLocation(currentLocation);
    localStorage.setItem('location', currentLocation)
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