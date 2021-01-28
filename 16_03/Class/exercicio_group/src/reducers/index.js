const INITIAL_STATE = {};

function formReducer(state = INITIAL_STATE, { type, formData}) {
  switch (type) {
    case 'ADD_ELEMENT':
      return {...state, ...formData };
    default:
      return state;
  }
}

export default formReducer;