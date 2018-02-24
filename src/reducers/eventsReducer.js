export const eventsReducer = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_EVENTS':
      return {...state, [action.category]: action.events };
    case 'UPDATE_EVENTS':
      const { category, id } = action.event;
      return {...state, [category]: {...state[category], [id]: action.event}}
    default: 
      return state;
  }
}

