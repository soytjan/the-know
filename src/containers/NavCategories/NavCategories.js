import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { cleanEventData, getCategoryData } from '../../helper';
import { addMusic,
  addFood,
  addCulture,
  addNightlife
 } from '../../actions/';
import './NavCategories.css';

class NavCategories extends Component {
  componentDidMount() {
    // check for location in localStorage if there is no location in this.props
    this.getAndStoreMusic();
    this.getAndStoreFood();
    this.getAndStoreCulture();
    this.getAndStoreNightlife(); 
  }

  getAndStoreMusic = async () => {
    const { location, addMusic } = this.props;
    const musicData = await getCategoryData('music', location);
    const cleanMusicData = cleanEventData(musicData);

    addMusic(cleanMusicData);    
  }

  getAndStoreFood = async () => {
    const { location, addFood } = this.props;
    const foodData = await getCategoryData('food', location);
    const cleanFoodData = cleanEventData(foodData);

    addFood(cleanFoodData);
  }

  getAndStoreCulture = async () => {
    const { location, addCulture } = this.props;
    const cultureData = await getCategoryData('culture', location);
    const cleanCultureData = cleanEventData(cultureData);

    addCulture(cleanCultureData);
  }

  getAndStoreNightlife = async () => {
    const { location, addNightlife } = this.props;
    const nightlifeData = await getCategoryData('nightlife', location)
    const cleanNightlifeData = cleanEventData(nightlifeData);

    addNightlife(cleanNightlifeData);
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
  addMusic: PropTypes.func,
  addFood: PropTypes.func,
  addCulture: PropTypes.func,
  addNightlife: PropTypes.func
};

const mapStateToProps = (state) => ({
  location: state.location
})

const mapDispatchToProps = (dispatch) => ({
  addMusic: events => dispatch(addMusic(events)),
  addFood: events => dispatch(addFood(events)),
  addCulture: events => dispatch(addCulture(events)),
  addNightlife: events => dispatch(addNightlife(events))
})

export default connect(mapStateToProps, mapDispatchToProps)(NavCategories);