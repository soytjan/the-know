export const musicReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_MUSIC':
      return [...state, ...action.events];
    default:
      return state;
  }
};