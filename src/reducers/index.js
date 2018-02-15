import { combineReducers } from 'redux';
import { eventsReducer } from './eventsReducer';
import { locationReducer } from './locationReducer';

const rootReducer = combineReducers({
  events: eventsReducer,
  location: locationReducer
});

export default rootReducer;