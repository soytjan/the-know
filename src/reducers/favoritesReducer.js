export const favoritesReducer = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_FAVORITE':
      return {...state, [action.event.id]: action.event};
    case 'REMOVE_FAVORITE':
      return Object.entries(state)
        .filter(([id, fav]) => id !== action.event.id)
        .reduce((acc, [id, fav]) => ({...acc, [id]: fav}), {})     
    default:
      return state;
  }
};