import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { getCityData, cleanEventData } from '../../helper';
import { addEvents } from '../../actions/';
import './SearchWelcome.css';

// SearchWelcome.propTypes = {

// };

export class SearchWelcome extends Component {
  constructor() {
    super();
    this.state = {
      location: '',
    }
  }

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    // make fetch call to api with function from helper
    console.log('handleSubmit')
    const response = await getCityData();
    const events = await cleanEventData(response);

    console.log('handleSubmit events', events);
    this.props.addEvents(events);

    // if successful put city into local storage
    // take clean data and put it into redux store
    // this.push history onto 
    // error return an error
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
})

export default connect(null, mapDispatchToProps)(SearchWelcome);