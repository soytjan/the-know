export const currentHasErroredReducer = (state=false, action) => {
  switch(action.type) {
    case 'CURRENT_HAS_ERRORED':
      return action.hasErrored;
    default: 
      return state;
  }
}