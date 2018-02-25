export const addCurrentLocation = coordinates => ({
  type: 'ADD_CURRENT_LOCATION',
  coordinates
});

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

// export const addSearch = events => ({
//   type: 'ADD_SEARCH',
//   events
// })

export const removeSearch = () => ({
  type: 'REMOVE_SEARCH'
})