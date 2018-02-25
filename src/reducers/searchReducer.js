export const searchReducer = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_SEARCH':
      return {...state, ...action.events };
    case 'REMOVE_SEARCH':
      return {}
    default: 
      return state;
  }
}