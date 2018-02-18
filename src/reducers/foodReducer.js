export const foodReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_FOOD':
      return [...state, ...action.events];
    case 'UPDATE_FOOD':
      return state.map(event => { 
        if (event.title === action.event.title) {
          return action.event;
        } 
        
        return event;
      })
    default:
      return state;
  }
};