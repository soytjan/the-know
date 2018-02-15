export const favoritesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_FAVORITES':
      return [...state, ...action.events];
    default:
      return state;
  }
};
