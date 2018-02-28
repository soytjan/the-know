import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchAndCleanCategoryEventData } from '../../helper';
import { addEvents } from '../../actions/';
import './NavCategories.css';

export class NavCategories extends Component {
  componentDidMount = async () => {
    const { location } = this.props;
    
    await this.getAndStoreEventsData(location);
  }

  getAndStoreEventsData = async (location) => {
    const { addEvents } = this.props;

    const musicEvents = await fetchAndCleanCategoryEventData('music', location);
    addEvents(musicEvents, 'music');
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
        <NavLink to='/home/music' activeClassName="active" className='a-category'>
          <button>
            MUSIC
          </button>
        </NavLink>
        <NavLink to='/home/food' activeClassName="active" className='a-category'>
          <button>
            FOOD
          </button>
        </NavLink>
        <NavLink to='/home/culture' activeClassName="active" className='a-category'>
          <button>
            CULTURE
          </button>
        </NavLink>
        <NavLink to='/home/nightlife' activeClassName="active" className='a-category'>
          <button>
            NIGHTLIFE
          </button>
        </NavLink>  
      </nav>
    );
  }
}

NavCategories.propTypes = {
  location: PropTypes.object,
  addEvents: PropTypes.func
};

export const mapStateToProps = (state) => ({
  location: state.location
});

export const mapDispatchToProps = (dispatch) => ({
  addEvents: (events, category) => dispatch(addEvents(events, category))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavCategories);