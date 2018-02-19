import { getGeoLocation } from '../helper';

export const addCurrentLocation = coordinates => ({
  type: 'ADD_CURRENT_LOCATION',
  coordinates
});

export const currentLocationFetchData = () => {
  return async (dispatch) => {
    try {
      const response = await getGeoLocation();
      
      if (response.status > 226) {
        throw new Error('could not get current location coordinates');
      } else {
        const jsonResponse = await response.json();
        const currentLocation = { coordinates: jsonResponse.location }
        dispatch(addCurrentLocation(currentLocation));
      }
    } catch (err) {
      dispatch(currentHasErrored(true));
      throw err;
    }  
  }
};

export const currentHasErrored = (bool) => ({
  type: 'CURRENT_HAS_ERRORED',
  hasErrored: bool
})

export const addLocation = location => ({
  type: 'ADD_LOCATION',
  location
});

export const addEvents = events => ({
  type: 'ADD_EVENTS',
  events
});

export const updateEvents = event => ({
  type: 'UPDATE_EVENTS',
  event
});

export const addMusic = events => ({
  type: 'ADD_MUSIC',
  events
});

export const updateMusic = event => ({
  type: 'UPDATE_MUSIC',
  event
});

export const addFood = events => ({
  type: 'ADD_FOOD',
  events
});

export const updateFood = event => ({
  type: 'UPDATE_FOOD',
  event
});

export const addCulture = events => ({
  type: 'ADD_CULTURE',
  events
});

export const updateCulture = event => ({
  type: 'UPDATE_CULTURE',
  event
});

export const addNightlife = events => ({
  type: 'ADD_NIGHTLIFE',
  events
});

export const updateNightlife = event => ({
  type: 'UPDATE_NIGHTLIFE',
  event
});

export const addFavorite = event => ({
  type: 'ADD_FAVORITE',
  event
});

export const removeFavorite = event => ({
  type: 'REMOVE_FAVORITE',
  event
})