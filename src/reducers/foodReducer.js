export const foodReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_FOOD':
      return [...state, ...action.events];
    default:
      return state;
  }
};