import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { cleanEventData, 
  getMusicData, 
  getFoodData, 
  getCultureData, 
  getNightlifeData 
} from '../../helper';
import { addMusic,
  addFood,
  addCulture,
  addNightlife
 } from '../../actions/';
import Events from '../../components/Events/Events';
import NavTime from '../NavTime/NavTime';
import './Main.css';

class Main extends Component {
  componentDidMount() {
    this.getAndStoreMusic();
    this.getAndStoreFood();
    this.getAndStoreCulture();
    this.getAndStoreNightlife();  
  }

  getAndStoreMusic = async () => {
    const { location, addMusic } = this.props;
    const musicData = await getMusicData(location);
    const cleanMusicData = cleanEventData(musicData);

    addMusic(cleanMusicData);    
  }

  getAndStoreFood = async () => {
    const { location, addFood } = this.props;
    const foodData = await getFoodData(location);
    const cleanFoodData = cleanEventData(foodData);

    addFood(cleanFoodData);
  }

  getAndStoreCulture = async () => {
    const { location, addCulture } = this.props;
    const cultureData = await getCultureData(location);
    const cleanCultureData = cleanEventData(cultureData);

    addCulture(cleanCultureData);
  }

  getAndStoreNightlife = async () => {
    const { location, addNightlife } = this.props;
    const nightlifeData = await getNightlifeData(location);
    const cleanNightlifeData = cleanEventData(nightlifeData);

    addNightlife(cleanNightlifeData);
  }  

  render() {
    const { events, music, food, culture, nightlife, favorites } = this.props;

    return (
      <section className="Main">
        <h3>{this.props.type}</h3>
        <Route 
          exact path='/home/' 
          render={() => (<Events info={events} type='event' />)}
        />
        <Route 
          exact path='/home/music' 
          render={() => (<Events info={music} type='music' />)}
        />
        <Route 
          exact path='/home/food' 
          render={() => (<Events info={food} type='food' />)}
        />
        <Route 
          exact path='/home/culture' 
          render={() => (<Events info={culture} type='culture' />)}
        />
        <Route 
          exact path='/home/nightlife' 
          render={() => (<Events info={nightlife} type='nightlife' />)}
        />
        <Route 
          exact path='/home/favorites' 
          render={() => (<Events info={favorites} type='favorites' />)}
        />
      </section>
    )
  }
}

Main.propTypes = {
  location: PropTypes.string,
  events: PropTypes.array,
  music: PropTypes.array,
  food: PropTypes.array,
  culture: PropTypes.array,
  nightlife: PropTypes.array,
  addMusic: PropTypes.func,
  addFood: PropTypes.func,
  addCulture: PropTypes.func,
  addNightlife: PropTypes.func
};

const mapStateToProps = (state) => ({
  events: state.events,
  location: state.location,
  music: state.music,
  food: state.food,
  culture: state.culture,
  nightlife: state.nightlife,
  favorites: state.favorites
})

const mapDispatchToProps = (dispatch) => ({
  addMusic: events => dispatch(addMusic(events)),
  addFood: events => dispatch(addFood(events)),
  addCulture: events => dispatch(addCulture(events)),
  addNightlife: events => dispatch(addNightlife(events))
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);


        