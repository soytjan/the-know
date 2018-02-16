import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { getCityData, cleanEventData } from '../../helper';
import { addEvents, addLocation } from '../../actions/';
import './SearchWelcome.css';

// SearchWelcome.propTypes = {

// };

export class SearchWelcome extends Component {
  constructor() {
    super();
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

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { location } = this.state;
      const response = await getCityData(location);
      const events = await cleanEventData(response);
      this.props.addEvents(events);
      this.props.addLocation(location);
      localStorage.setItem('location', location); 
      console.log(this.props)
      // this.push history to home page 
      // this.props.history.push('/home');
    } catch (error) {
      this.setState({ error: true })
    } 
  }

  render() {
    return (
      <article className='SearchWel'>
        <h2>Discover your city</h2>
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

const mapDispatchToProps = (dispatch) => ({
  addEvents: events => dispatch(addEvents(events)),
  addLocation: location => dispatch(addLocation(location))
})

export default connect(null, mapDispatchToProps)(SearchWelcome);