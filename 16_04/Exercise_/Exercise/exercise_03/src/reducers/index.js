const INITIAL_STATE = {
  // character: []
}

export default function (state = INITIAL_STATE, action){
  switch(action.type) {
    case 'FETCH': 
      return { ...state, isFetching: true };
    case 'CHARACTER_SUCESS': 
      // return { ...state, character: state.character.concat(action.character) }; 
      return { ...state, ...action.character }; 
    default:
      return state
  } 
}
