import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAndCleanCategoryEventData } from '../../helper';
import {
  addEvents,
  updateEvents,
  updateMusic,
  updateFood,
  updateCulture,
  updateNightlife,
  addFavorite,
  removeFavorite
 } from '../../actions/';
import Events from '../../components/Events/Events';
import NavTime from '../NavTime/NavTime';
import './Main.css';

class Main extends Component {
  // componentWillUpdate to check for favorites?
  

  handleFavorites = (event, category) => {
    const { favorites } = this.props;
    const isDuplicated = favorites.some(fav => fav.title === event.title);
    const favEvent = {...event, isFavorited: !event.isFavorited };
    isDuplicated ? this.removeFavEvent(favEvent) : this.addFavEvent(favEvent);

    this.handleUpdateEvents(category, favEvent);
  }

  constructor() {
    super();
    this.state = {
      isLoading: true
    }
  }

  componentDidMount = async () => {
    const { location } = this.props;
    console.log('mounting component')
    await this.getAndStoreEventsData(location);
    this.setState({isLoading: false});
  }

  getAndStoreEventsData = async (location) => {
    console.log('in get and store')
    const { addEvents } = this.props;

    const musicEvents = await fetchAndCleanCategoryEventData(location, 'music');
    addEvents(musicEvents, 'music')
    const foodEvents = await fetchAndCleanCategoryEventData(location, 'food');
    addEvents(foodEvents, 'food');
    const cultureEvents = await fetchAndCleanCategoryEventData(location, 'culture');
    addEvents(cultureEvents, 'culture');
    const nightlifeEvents = await fetchAndCleanCategoryEventData(location, 'nightlife');
    addEvents(nightlifeEvents, 'nightlife');
  }

  handleUpdateEvents = (category, event) => {
    const { updateMusic, updateFood, updateCulture, updateNightlife, updateEvents } = this.props;

    switch (category) {
      case 'music':
        return updateMusic(event);
      case 'food':
        return updateFood(event);
      case 'culture':
        return updateCulture(event);
      case 'nightlife':
        return updateNightlife(event);
      default:
        return updateEvents(event);
    }
  }

  addFavEvent = (event) => {
    const { addFavorite } = this.props;

    addFavorite(event); 
  }

  removeFavEvent = (event) => {
    const { removeFavorite } = this.props;

    removeFavorite(event);
  }

  genEventsArray = () => {
    const { events } = this.props;
    const categories = Object.keys(events);
    const array =  categories.reduce((eventsArr, category) => {
      const categoryIds = Object.keys(events[category]);
      const categoryEvents = categoryIds.map(event => events[category][categoryIds]);

      return [...eventsArr, ...categoryEvents]
    }, [])

    console.log(array)
    return array;
  } 

  render() {
    const { events, music, food, culture, nightlife, favorites } = this.props;

    if(this.state.isLoading) {
      return (
        <div>
          I'm still loading! 
        </div>
      )
    }

    return (
      <section className="Main">
        <h3>{this.props.type}</h3>
        <Route path='/home' component={NavTime} />
        <Route 
          exact path='/home/' 
          render={() => (<Events 
            info={events} 
            type='event' 
            onFavorite={this.handleFavorites} />)}
        />
        <Route 
          exact path='/home/music' 
          render={() => (<Events 
            info={events.music} 
            type='music' 
            onFavorite={this.handleFavorites} />)}
        />
        <Route 
          exact path='/home/food' 
          render={() => (<Events 
            info={events.food} 
            type='food' 
            onFavorite={this.handleFavorites} />)}
        />
        <Route 
          exact path='/home/culture' 
          render={() => (<Events 
            info={events.culture} 
            type='culture' 
            onFavorite={this.handleFavorites} />)}
        />
        <Route 
          exact path='/home/nightlife' 
          render={() => (<Events 
            info={events.nightlife} 
            type='nightlife' 
            onFavorite={this.handleFavorites} />)}
        />
        <Route 
          exact path='/home/favorites' 
          render={() => (<Events 
            info={favorites} 
            type='favorites' 
            onFavorite={this.handleFavorites} />)}
        />
      </section>
    )
  }
}

Main.propTypes = {
  location: PropTypes.object,
  events: PropTypes.object,
  music: PropTypes.array,
  food: PropTypes.array,
  culture: PropTypes.array,
  nightlife: PropTypes.array,
  addFavorite: PropTypes.func,
  removeFavorite: PropTypes.func
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
  addEvents: (events, category) => dispatch(addEvents(events, category)),
  // updateEvents: event => dispatch(updateEvents(event)),
  // updateMusic: event => dispatch(updateMusic(event)),
  // updateFood: event => dispatch(updateFood(event)),
  // updateCulture: event => dispatch(updateCulture(event)),
  // updateNightlife: event => dispatch(updateNightlife(event)),
  // addFavorite: event => dispatch(addFavorite(event)),
  // removeFavorite: event => dispatch(removeFavorite(event))
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);


        