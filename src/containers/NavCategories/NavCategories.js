import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchAndCleanCategoryEventData } from '../../helper';
import { addEvents } from '../../actions/';
import './NavCategories.css';

class NavCategories extends Component {
  componentDidMount = async () => {
    // check for location in localStorage if there is no location in this.props
    const { location } = this.props;

    await this.getAndStoreEventsData(location);
  }

  getAndStoreEventsData = async (location) => {
    const { addEvents } = this.props;

    const musicEvents = await fetchAndCleanCategoryEventData('music', location);
    addEvents(musicEvents, 'music')
    const foodEvents = await fetchAndCleanCategoryEventData('food', location);
    addEvents(foodEvents, 'food');
    const cultureEvents = await fetchAndCleanCategoryEventData('culture', location);
    addEvents(cultureEvents, 'culture');
    const nightlifeEvents = await fetchAndCleanCategoryEventData('nightlife', location);
    addEvents(nightlifeEvents, 'nightlife');
  }

  render() {
    return (
      <nav className='NavCategories'>
        <NavLink to='/home/music' className='a-category'>
          <button>
            MUSIC
          </button>
        </NavLink>
        <NavLink to='/home/food' className='a-category'>
          <button>
            FOOD
          </button>
        </NavLink>
        <NavLink to='/home/culture' className='a-category'>
          <button>
            CULTURE
          </button>
        </NavLink>
        <NavLink to='/home/nightlife' className='a-category'>
          <button>
            NIGHTLIFE
          </button>
        </NavLink>
      </nav>
    )
  }
}

NavCategories.propTypes = {
  location: PropTypes.object,
};

const mapStateToProps = (state) => ({
  location: state.location
})

const mapDispatchToProps = (dispatch) => ({
  addEvents: (events, category) => dispatch(addEvents(events, category)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NavCategories);