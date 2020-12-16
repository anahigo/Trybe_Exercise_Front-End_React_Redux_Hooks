const INITIAL_STATE = {
  userLogin: {},
  usersData: [],
};

function loginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, userLogin: action.user };
    case 'ADD_USER':
      return { ...state, usersData: state.usersData.concat(action.user) };
    default:
      return state;
  }
}

export default loginReducer;