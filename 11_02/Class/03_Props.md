# Props
A props é uma das partes mais importantes de um componente. É por ela que você passa os valores para o componente, e é como o torna reutilizável em diferentes contextos. Ela é como os parâmetros de uma função. Observe o exemplo abaixo de como seria uma função que retornaria a mesma mensagem que o componente Greeting renderiza:

function greeting(name){
  return `Hello, ${name}`;
}
console.log(greeting('Samuel'));

Lembrando que como podemos ter vários parâmetros em uma função, podemos passar inúmeras propriedades para o componente, pelas props. Adicionemos o sobrenome da pessoa a função e ao componente.

function greeting(name, lastName){
  return `Hello, ${name} ${lastName}`;
}
console.log(greeting('Samuel', 'Silva'));
Ao componente Greeting:

import React from 'react';

class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name} {this.props.lastName}</h1>;
  }
}

export default Greeting;

Agora o chamamos dentro do componente App:

import Greeting from './Greeting';
function App() {
  return (
    <div>
      <Greeting name="Samuel" lastName="Silva" />
    </div>
  );
}

Observe como a chamada do componente lembra a chamada de uma função com passagem de parâmetros! Seu retorno, nesse caso, será <h1>Hello, Samuel Silva</h1>.

Agora vamos fazer este exercício de fixação!

import React from 'react';

class Image extends React.Component {
  render() {
    return <img src={this.props.source} alt={this.props.alternativeText} />;
  }
}

export default Image;

Crie uma aplicação React na sua máquina via create-react-app com o nome fixation-exercises-11-2. Crie um arquivo Image.js no diretório src do projeto e copie para esse arquivo o código escrito acima. Uma vez feito isso tudo, responda:

1. Qual o nome do componente declarado acima? Image

2. Chame o componente Image, de forma que seja mostrada esta imagem, ou o texto Cute cat staring, caso a imagem não consiga ser carregada.

