import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAndCleanSearchData } from '../../helper';
import { addEvents, removeSearch } from '../../actions/';
import PropTypes from 'prop-types';
import './SearchMain.css';


export class SearchMain extends Component {
  // for local state location need to check for local storage
  constructor(props) {
    super(props);
    this.state = {
      eventSearch: '',
      location: this.props.location.address || ''
    }
  }

  componentDidMount() {
    
  }

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const {eventSearch} = this.state;
    const { location, removeSearch, addEvents } = this.props;

    const searchedEvents = await fetchAndCleanSearchData(eventSearch, location);
    console.log(searchedEvents)
    removeSearch();
    addEvents(searchedEvents, 'search');
    this.props.onSearch();
    // clean information from API
    // clear out storage
    // then put in something new
    // change the location in store
    // change the location in localStorage
  }

  render() {
    return (
      <div className='SearchMain'>
        <form onSubmit={this.handleSubmit}>
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
        </form>
      </div>
    )
  }
}

SearchMain.propTypes = {
  location: PropTypes.object,
};

const mapStateToProps = state => ({
  location: state.location
})

const mapDispatchToProps = dispatch => ({
  addEvents: (events, category) => dispatch(addEvents(events, category)),
  removeSearch: () => dispatch(removeSearch())
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchMain);