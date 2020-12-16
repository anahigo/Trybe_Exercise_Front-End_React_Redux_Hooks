# Configurando Redux com React
Agora que relembramos todos estes conceitos, podemos criar e configurar uma aplicação React que utilizará Redux.

Primeiro, criamos nossa aplicação React:

npx create-react-app my-app

Depois, instalamos as dependências:

npm install --save redux react-redux

Agora, imagine que vamos implementar uma solução para salvar uma lista de itens que podem ser adicionados por quem utilizar a aplicação. Inicialmente esta lista estará vazia. A primeira coisa que precisamos fazer, ao implementar o Redux em nossa aplicação React, é criar a nossa fonte universal de estados, o Store.

Dessa forma, vamos criar o arquivo src/store/index.js com o seguinte conteúdo:

import { createStore } from 'redux';

const store = createStore();

export default store;

A função createStore deve receber como parâmetro um reducer. Portanto, vamos criar um no arquivo src/reducer/index.js:

O reducer, no nosso caso, deverá ser capaz de adicionar itens a lista.

const INITIAL_STATE = [];

function listReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_ELEMENT':
      return [...state, action.value];
    default:
      return state;
  }
}

export default listReducer;

Vamos analisar o que está acontencedo:
- Primeiro, definimos um estado inicial para nosso reducer;

- Um reducer deve receber como parâmetro um estado e uma ação;

- A ação, por convenção, deve ser um objeto e possuir a key type. É essa key que define como o reducer vai manipular o estado.

- No exemplo, como estamos criando uma lista e só queremos adicionar elementos, caso o type seja igual a " ADDELEMENT ", estamos instruindo nosso reducer a guardar todo o estado anterior, utilizando _spread operator, e a adicionar o novo elemento, que nesse caso está na key value da nossa action. Caso o type seja diferente de "ADD_ELEMENT", o reducer deverá cair no default do switch, que preserva o state.

Vamos criar agora o arquivo src/actions/index.js, que guardará nossas actions:

export const addAssignment = (value) => ({ type: 'ADD_ELEMENT', value });

Como dito anterioremente, nossa action, por convenção, deve ser um objeto. Esse objeto pode possuir apenas a key type ou mais outras keys, caso seja conveniente. Note que, no caso acima, criamos também uma key value, que guardará o valor recebido pela action.

Agora precisamos voltar ao nosso store e passar o reducer como parâmetro para o createStore:

import { createStore, combineReducers } from 'redux';
import listReducer from '../reducers';

const rootReducer = combineReducers({ listReducer });

const store = createStore(rootReducer);

export default store;

Utilizamos também o método combineReducers que, como diz seu nome, combina reducers. Ele deve receber um objeto com os reducers criados. Sem ele, só poderíamos usar um reducer em nossa aplicação.

Dica: Mesmo que tenhamos apenas um reducer é uma boa prática que utilizemos o combineReducers, pois caso nossa aplicação cresça e necessite de mais de um reducer não será necessário alterar sua lógica.

Quando o combineReducers é utilizado, o estado da nossa aplicação fica disposto em um objeto. Dentro desse objeto cada reducer passado apresentará uma chave cujo valor será o estado que é responsável por gerenciar. Veja como fica o estado inicial da nossa explicação:

{
  listReducer: [],
}

Dica: Para facilitar a utilização do Redux, recomendamos fortemente que você instale a extensão Redux Devtools. Na seção de Recursos adicionais você irá encontrar um link para um artigo que além de ensinar como instalar e habilitar extensão, também mostrará como utilizá-la.

Pronto! Store, Reducer e actions devidamente criados. Pode parecer que isso está desconexo de uma aplicação React, e até o momento realmente está. Essa é a estrutura pura do Redux. Agora, vamos conectá-la ao React.

Para utilizarmos o estado compartilhado que o Redux provê, precisamos editar o arquivo src/App.js para adicionarmos toda essa configuração:

import React from 'react';
// o provider é o meio pelo qual disponibilizamos o Store
import { Provider } from 'react-redux';
import store from './store';

class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          // componentes aqui
        </Provider>
      </div>
    );
  }
}

export default App;

- Video Trybe

Agora vamos implementar os componentes List.js e InputsList e conectá-los ao Redux. Primeiramente vamos importar e adicionar os componentes ao componente App

import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import List from './List';
import InputsList from './InputsList';

class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <InputsList />
          <List />
        </Provider>
      </div>
    );
  }
}

export default App;

Agora vamos à implementação do componente InputsList

import React from 'react';
import { connect } from 'react-redux';
import { addAssignment } from './actions';

class InputsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { textValue: '' };
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Digite a tarefa"
          onChange={event => this.setState({ textValue: event.target.value })}
        />
        <button onClick={() => this.props.add(this.state.textValue)}>
          Adicionar tarefa
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  add: e => dispatch(addAssignment(e))});

export default connect(null, mapDispatchToProps)(InputsList);

Vamos passar por cada parte do componente para explicar seu funcionamento:
- Primeiro, nós estamos definindo um estado interno do componente chamado textValue. Note que, apesar de estarmos usando o Redux, que centraliza os states, caso haja algum estado o qual não necessite navegar entre outros componentes, podemos declará-lo internamente.

- Estamos criando um input para o usuário digitar a tarefa que deseja adicionar. A cada mudança no valor do input, o valor é salvo no estado textValue.

- Um botão com a propriedade onClick foi criado, passando a função add que está presente na props. Mas como isso foi parar lá? Veremos agora: