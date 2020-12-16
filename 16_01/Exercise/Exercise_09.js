/* 
9 - 
Nesta lição, você implementará um contador simples com Redux do zero. O básico é fornecido no editor de código, mas você terá que preencher os detalhes! Use os nomes que são fornecidos e definir incActione decActionação criadores, os counterReducer(), INCREMENTe DECREMENTtipos de ação, e finalmente o Redux store. Quando terminar, você poderá despachar INCREMENTou DECREMENTações para aumentar ou diminuir o estado mantido no store. Boa sorte construindo seu primeiro aplicativo Redux!

const INCREMENT = null; // Define a constant for increment action types
const DECREMENT = null; // Define a constant for decrement action types

const counterReducer = null; // Define the counter reducer which will increment or decrement the state based on the action it receives

const incAction = null; // Define an action creator for incrementing

const decAction = null; // Define an action creator for decrementing

const store = null; // Define the Redux store here, passing in your reducers
*/

const INCREMENT = "INCREMENT"; // define a constant for increment action types
const DECREMENT = "DECREMENT"; // define a constant for decrement action types

// define the counter reducer which will increment or decrement the state based on the action it receives
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;

    case DECREMENT:
      return state - 1;

    default:
      return state;
  }
};

// define an action creator for incrementing
const incAction = () => {
  return {
    type: INCREMENT
  };
};

// define an action creator for decrementing
const decAction = () => {
  return {
    type: DECREMENT
  };
};

// define the Redux store here, passing in your reducers
const store = Redux.createStore(counterReducer);