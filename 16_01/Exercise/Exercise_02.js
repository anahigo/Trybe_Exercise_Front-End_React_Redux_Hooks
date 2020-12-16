/* 
2 - O armazenamento Redux no editor de código tem um estado inicializado que é um objeto que contém uma propriedade login atualmente definida para false. Há também um criador de ação chamado, loginAction() que retorna uma ação do tipo LOGIN. Despache a LOGIN ação para a loja Redux chamando o método dispatch e passe a ação criada por loginAction().

const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// Dispatch the action here:
*/

const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// Dispatch the action here:

store.dispatch(loginAction())