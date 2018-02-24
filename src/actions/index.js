import { getGeoLocation } from '../helper';

export const addCurrentLocation = coordinates => ({
  type: 'ADD_CURRENT_LOCATION',
  coordinates
});

export const currentHasErrored = (bool) => ({
  type: 'CURRENT_HAS_ERRORED',
  hasErrored: bool
})

export const addLocation = location => ({
  type: 'ADD_LOCATION',
  location
});

export const addEvents = (events, category) => ({
  type: 'ADD_EVENTS',
  events,
  category
})

export const updateEvents = event => ({
  type: 'UPDATE_EVENTS',
  event
});

export const updateMusic = event => ({
  type: 'UPDATE_MUSIC',
  event
});

export const updateFood = event => ({
  type: 'UPDATE_FOOD',
  event
});

export const updateCulture = event => ({
  type: 'UPDATE_CULTURE',
  event
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