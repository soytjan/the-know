import { combineReducers } from 'redux';
import { eventsReducer } from './eventsReducer';
import { locationReducer } from './locationReducer';
import { currentLocationReducer } from './currentLocationReducer';
import { favoritesReducer } from './favoritesReducer';

const rootReducer = combineReducers({
  currentLocation: currentLocationReducer,
  events: eventsReducer,
  location: locationReducer,
  favorites: favoritesReducer,
});

export default rootReducer;