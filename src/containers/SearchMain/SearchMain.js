import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './SearchMain.css';


export class SearchMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventSearch: '',
      location: this.props.location
    }
  }

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  }

  handleSubmit = () => {
    // will need to make another API call and get back information
    // clean information from API
    // clear out storage
    // then put in something new
    // change the location in store
    // change the location in localStorage
  }

  render() {
    return (
      <div className='SearchMain'>
        <input
          onChange={this.handleChange}
          name='eventSearch'
          value={this.state.eventSearch}
          placeholder='Find events in your area'
          className='input-search' 
          type="text"
        />
        <input 
          onChange={this.handleChange}
          name='location'
          value={this.state.location}
          placeholder='Where?' 
          className='input-location'
          type="text"
        />
        <button>SEARCH</button>
      </div>
    )
  }
}

SearchMain.propTypes = {
  location: PropTypes.string,
};

const mapStateToProps = state => ({
  location: state.location
})

export default connect(mapStateToProps)(SearchMain);