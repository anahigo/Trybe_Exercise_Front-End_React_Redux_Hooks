/* 
5 - Declare LOGINe LOGOUTcomo constvalores e atribua-os às strings 'LOGIN'e 'LOGOUT', respectivamente. Em seguida, edite o authReducer()e os criadores de ação para fazer referência a essas constantes em vez de valores de string.

Nota:  Geralmente é uma convenção escrever constantes em maiúsculas, e isso também é uma prática padrão no Redux.

// Change code below this line

// Change code above this line

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {

  switch (action.type) {

    case 'LOGIN':
      return {
        authenticated: true
      }

    case 'LOGOUT':
      return {
        authenticated: false
      }

    default:
      return state;

  }

};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};
*/

// Change code below this line
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT'
// Change code above this line

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {

  switch (action.type) {

    case LOGIN:
      return {
        authenticated: true
      }

    case LOGOUT:
      return {
        authenticated: false
      }

    default:
      return state;

  }

};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: LOGIN
  }
};

const logoutUser = () => {
  return {
    type: LOGOUT
  }
};