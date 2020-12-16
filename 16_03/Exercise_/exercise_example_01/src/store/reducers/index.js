// reducers

const initialState = {
  username: null,
  email: null,
  preferences: null,
}

export const forms = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FORMS':
      return { 
        ...state, 
        ...action.payload  
      }
    default:
      return state;
  }
}