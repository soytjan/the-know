export const addLocation = location => ({
  type: 'ADD_LOCATION',
  location
});

export const addEvents = events => ({
  type: 'ADD_EVENTS',
  events
});

export const addMusic = events => ({
  type: 'ADD_MUSIC',
  events
});

export const addFood = events => ({
  type: 'ADD_FOOD',
  events
});

export const addCulture = events => ({
  type: 'ADD_CULTURE',
  events
});

export const addNightlife = events => ({
  type: 'ADD_NIGHTLIFE',
  events
});

export const addFavorite = event => ({
  type: 'ADD_FAVORITE',
  event
});

export const removeFavorite = event => ({
  type: 'REMOVE_FAVORITE',
  event
})