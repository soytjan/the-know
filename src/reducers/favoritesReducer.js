export const favoritesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_FAVORITE':
      return [...state, action.event];
    case 'REMOVE_FAVORITE':
      return state.filter(event => event.title !== action.event.title);
    default:
      return state;
  }
};
