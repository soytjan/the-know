export const nightlifeReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_NIGHTLIFE':
      return [...state, ...action.events];
    case 'UPDATE_NIGHTLIFE':
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