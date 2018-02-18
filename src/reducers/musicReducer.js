export const musicReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_MUSIC':
      return [...state, ...action.events];
    case 'UPDATE_MUSIC':
      return state.map(event => { 
        if (event.id === action.event.id) {
          return action.event;
        } 
        
        return event;
      })
    default:
      return state;
  }
};