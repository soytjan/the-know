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

export const addFavorite = event => ({
  type: 'ADD_FAVORITE',
  event
});

export const removeFavorite = event => ({
  type: 'REMOVE_FAVORITE',
  event
})