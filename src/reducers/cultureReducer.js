export const cultureReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_CULTURE':
      return [...state, ...action.events];
    default:
      return state;
  }
};