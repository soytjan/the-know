import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  updateEvents,
  addFavorite,
  removeFavorite
} from '../../actions/';
import Events from '../../components/Events/Events';
import './Main.css';

export class Main extends Component {
  handleFavorites = (event) => {
    const { favorites, updateEvents } = this.props;
    const favIds = Object.keys(favorites);
    const isDuplicated = favIds.some(id => id === event.id);
    const favEvent = {...event, isFavorited: !event.isFavorited };
    isDuplicated ? this.removeFavEvent(favEvent) : this.addFavEvent(favEvent);

    updateEvents(favEvent);
  }

  // look at this for a refactor 
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

    if (!events.music) {
      return (
        <div className='loading'></div>
      );
    }

    return (
      <div>
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
          <Route 
            exact path='/home/search' 
            render={() => (<Events 
              info={events.search} 
              type='search' 
              onFavorite={this.handleFavorites} />)}
          />
        </section>
        <footer className='main-footer'>
          <p>&copy; Amanda Tjan</p>
        </footer>
      </div>
    );
  }
}

Main.propTypes = {
  events: PropTypes.object,
  favorites: PropTypes.object,
  updateEvents: PropTypes.func,
  addFavorite: PropTypes.func,
  removeFavorite: PropTypes.func,
  type: PropTypes.string
};

export const mapStateToProps = (state) => ({
  events: state.events,
  favorites: state.favorites
});

export const mapDispatchToProps = (dispatch) => ({
  updateEvents: event => dispatch(updateEvents(event)),
  addFavorite: event => dispatch(addFavorite(event)),
  removeFavorite: event => dispatch(removeFavorite(event))
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);


        