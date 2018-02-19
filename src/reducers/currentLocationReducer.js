export const currentLocationReducer = (state={}, action) => {
  switch(action.type) {
    case 'ADD_CURRENT_LOCATION':
      return action.coordinates;
    default:
      return state;
  }
};