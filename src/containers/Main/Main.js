import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { cleanEventData, 
//   getMusicData, 
//   getFoodData, 
//   getCultureData, 
//   getNightlifeData 
// } from '../../helper';
import { addMusic,
  addFood,
  addCulture,
  addNightlife,
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
  handleFavorites = (event, type) => {
    console.log('handleFavorite run')
    const { favorites } = this.props;
    const isDuplicated = favorites.some(fav => fav.title === event.title);
    const favEvent = {...event, isFavorited: !event.isFavorited };
    isDuplicated ? this.removeFavEvent(favEvent) : this.addFavEvent(favEvent);

    this.handleUpdateEvents(type, favEvent);
  }

  handleUpdateEvents = (type='event', event) => {
    const { updateMusic, updateFood, updateCulture, updateNightlife, updateEvents } = this.props;

    switch (type) {
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

  render() {
    const { events, music, food, culture, nightlife, favorites } = this.props;

    return (
      <section className="Main">
        <h3>{this.props.type}</h3>
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
            info={music} 
            type='music' 
            onFavorite={this.handleFavorites} />)}
        />
        <Route 
          exact path='/home/food' 
          render={() => (<Events 
            info={food} 
            type='food' 
            onFavorite={this.handleFavorites} />)}
        />
        <Route 
          exact path='/home/culture' 
          render={() => (<Events 
            info={culture} 
            type='culture' 
            onFavorite={this.handleFavorites} />)}
        />
        <Route 
          exact path='/home/nightlife' 
          render={() => (<Events 
            info={nightlife} 
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
  location: PropTypes.string,
  events: PropTypes.array,
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
  updateEvents: event => dispatch(updateEvents(event)),
  updateMusic: event => dispatch(updateMusic(event)),
  updateFood: event => dispatch(updateFood(event)),
  updateCulture: event => dispatch(updateCulture(event)),
  updateNightlife: event => dispatch(updateNightlife(event)),
  addFavorite: event => dispatch(addFavorite(event)),
  removeFavorite: event => dispatch(removeFavorite(event))
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);


        