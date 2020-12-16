# Conteúdo
Você já deve ter notado que sempre que uma nova aplicação React é criada, o App.js vem como um componente funcional e se você precisar usar um estado ou um ciclo de vida dentro dele, é necessário mudar todo seu componente pra classe, e junto com ela vinha constructor, super(), render(), this, binds... 😖

Não seria muito melhor se pudessemos deixar as classes de lado e usar uma função que fosse capaz de utilizar estados e ciclo de vida de forma simples e muito menos verbosa?? Com a chegada dos Hooks na versão 16.8.0 do React isso se tornou possível!

(ノಥ,_｣ಥ)ノ彡 React.Component 🗑

function ヾ(Ő‿Ő✿)

# useState
- Video Trybe 

O useState é o hook mais comum e ele permite que você utilize o state e outros recursos do React sem escrever uma classe. Para entender melhor do que estamos falando, veja este componente com Estado feito com uma classe e em seguida o mesmo componente feito com hooks:

import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  render() {
    const { counter } = this.state

    return (
      <div>
        <div>Counter: {counter}</div>
        <button
          type="button"
          onClick={() =>
            this.setState((prevState) => ({ counter: prevState.counter + 1 }))
          }
        >
          Increase Counter
        </button>
      </div>
    );
  }
}

export default App;

Vamos agora criar esse mesmo componente usando função e utilizar hooks para entender como o useState funciona:

import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <div>Counter: {counter}</div>
      <button type="button" onClick={() => setCounter(counter + 1)}>
        Increase Counter
      </button>
    </div>
  );
}

export default App;

- A primeira mudança é que não é mais necessário importar o Component, somente o useState.

- O constructor, junto com o super e o this.state também foram removidos. Ao invés disso foi adicionado o useState: O counter é o valor do estado, o setCounter é a função que será usada para definir novos valores ao estado e o useState(0) é onde você adiciona o valor inicial do seu estado, neste caso 0. E repare que não precisamos nos preocupar em como atualizar um estado com base no estado anterior! Essa lógica funciona de forma transparente.

- Nosso event handler onClick também mudou. No lugar de this.setState temos somente a chamada da função setCounter definida anteriormente, recebendo como parâmetro o novo valor de counter, neste caso counter + 1.

Com o useState, no lugar de ter todos os estados do componente dentro de um grande objeto, teremos um useState diferente para cada valor de estado que estiver sendo utilizado.

# useContext
O useContext é o hook que vai te ajudar a trabalhar com a Context API. Ele funciona como um Consumer, mas de uma forma muito menos complexa e que torna seu código bem mais legível!

Assim como seria feito utilizando o Consumer, vamos fazer um setup inicial para podermos utilizar o useContext:
Primeiro criamos o Context:

import { createContext } from 'react';

const AppContext = createContext();

export default AppContext;

Em seguida criamos o Provider:

import React, { useState } from 'react';
import AppContext from './AppContext';

function Provider({ children }) {
  const [stateA, setStateA] = useState('initialStateA');
  const [stateB, setStateB] = useState('initialStateB');
  const contextValue = {
    stateA,
    setStateA,
    stateB,
    setStateB,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;

Com o Context e o Provider criados, precisamos adicionar o Provider à aplicação:

import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import Provider from '../utils/Provider'

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
)

Com o setup concluído, podemos utilizar o estado criado no Provider em qualquer componente que for necessário utilizando o useContext. Pra isso, precisamos importar o Context e o useContext:

import React, { useContext } from 'react';
import AppContext from '../utils/AppContext';

const ComponenteX = () => {
  const { stateA, setStateA, stateB } = useContext(AppContext);

  return (
    <div>
      <p>{stateA}</p>
      <p>{stateB}</p>
      <button onClick={() => setStateA("newState")}>Click</button>
    </div>
  );
};

export default ComponenteX;