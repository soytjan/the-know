import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAndCleanCategoryEventData } from '../../helper';
import {
  addEvents,
  updateEvents,
  addFavorite,
  removeFavorite
 } from '../../actions/';
import Events from '../../components/Events/Events';
import NavTime from '../NavTime/NavTime';
import './Main.css';

class Main extends Component {
  handleFavorites = (event) => {
    const { favorites, updateEvents } = this.props;
    const favIds = Object.keys(favorites);
    const isDuplicated = favIds.some(id => id === event.id);
    const favEvent = {...event, isFavorited: !event.isFavorited };
    isDuplicated ? this.removeFavEvent(favEvent) : this.addFavEvent(favEvent);

    updateEvents(favEvent);
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
    const { events, favorites } = this.props;

    if(!events.music) {
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
  addFavorite: PropTypes.func,
  removeFavorite: PropTypes.func
};

const mapStateToProps = (state) => ({
  events: state.events,
  location: state.location,
  favorites: state.favorites
})

const mapDispatchToProps = (dispatch) => ({
  addEvents: (events, category) => dispatch(addEvents(events, category)),
  updateEvents: event => dispatch(updateEvents(event)),
  addFavorite: event => dispatch(addFavorite(event)),
  removeFavorite: event => dispatch(removeFavorite(event))
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);


        