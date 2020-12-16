/* 1 - O Redux storeé um objeto que contém e gerencia a aplicação state. Existe um método chamado createStore()no objeto Redux, que você usa para criar o Redux store. Este método assume uma reducerfunção como um argumento obrigatório. A reducerfunção é abordada em um desafio posterior e já está definida para você no editor de código. Ele simplesmente aceita statecomo argumento e retorna state.

Declare uma storevariável e atribua-a ao createStore()método, passando o reducercomo um argumento.

Nota:  O código no editor usa a sintaxe de argumento padrão ES6 para inicializar este estado para conter um valor de 5. Se você não estiver familiarizado com os argumentos padrão, pode consultar a seção ES6 no Currículo que cobre este tópico. 
const reducer = (state = 5) => {
  return state;
}

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here: */

const reducer = (state = 5) => {
  return state;
}

const store = Redux.createStore(reducer)

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:

/* 2 - O código do desafio anterior é reescrito de forma mais concisa no editor de código. Use store.getState() para recuperar o state de store e atribua-o a uma nova variável currentState. 

const store = Redux.createStore(
  (state = 5) => state
);

// Change code below this line*/

const store = Redux.createStore(
  (state = 5) => state
);

// Change code below this line
let currentState = store.getState()

/* 3 - Escrever uma ação Redux é tão simples quanto declarar um objeto com uma propriedade type. Declare um objeto actione atribua a ele um typeconjunto de propriedades para a string 'LOGIN'. */

let action = {
  type: 'LOGIN'
}