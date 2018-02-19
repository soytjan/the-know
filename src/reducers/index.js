import { combineReducers } from 'redux';
import { eventsReducer } from './eventsReducer';
import { cultureReducer } from './cultureReducer';
import { locationReducer } from './locationReducer';
import { currentLocationReducer } from './currentLocationReducer';
import { foodReducer } from './foodReducer';
import { musicReducer } from './musicReducer';
import { nightlifeReducer } from './nightlifeReducer';
import { favoritesReducer } from './favoritesReducer';

const rootReducer = combineReducers({
  currentLocation: currentLocationReducer,
  events: eventsReducer,
  location: locationReducer,
  music: musicReducer,
  food: foodReducer,
  culture: cultureReducer,
  nightlife: nightlifeReducer,
  favorites: favoritesReducer,
});

export default rootReducer;