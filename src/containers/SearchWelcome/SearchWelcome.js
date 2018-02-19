import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { getCityData, cleanEventData, initialFetchWithCoordinates } from '../../helper';
import { addEvents, addLocation } from '../../actions/';
import './SearchWelcome.css';

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
      const jsonResponse = await getCityData(location);
      const events = await cleanEventData(jsonResponse);
      this.props.addEvents(events);
      this.props.addLocation(location);
      localStorage.setItem('location', location); 
      this.props.onReroute()
    } catch (error) {
      this.setState({ error: true })
    } 
  }

  // need to make a function using the coordinates
  handleCurrentLocation = async () => {
    try {
      const { currentLocation, addEvents, onReroute } = this.props;
      const jsonResponse = await initialFetchWithCoordinates(currentLocation);
      const events = await cleanEventData(jsonResponse);

      addEvents(events);
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

const mapStateToProps = (state) => ({
  currentLocation: state.currentLocation
});

const mapDispatchToProps = (dispatch) => ({
  addEvents: events => dispatch(addEvents(events)),
  addLocation: location => dispatch(addLocation(location))
})

export default connect(null, mapDispatchToProps)(SearchWelcome);