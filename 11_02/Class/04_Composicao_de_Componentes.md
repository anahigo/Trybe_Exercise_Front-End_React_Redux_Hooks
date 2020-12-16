# Composição de componentes
Confome dito anteriormente, componentes são utilizados para construir uma aplicação React. Mas como essa construção é feita? Em React, faz-se uso de composição de componentes.

Primeiramente, leia o restante do artigo oficial de React, começando em Compondo Componentes e terminando em Props são Somente Leitura. (https://pt-br.reactjs.org/docs/components-and-props.html#composing-components)

Agora, vamos reforçar o que você acabou de aprender com este exemplo:

// arquivo Image.js
import React from 'react';

class Image extends React.Component {
  render() {
    return <img src={this.props.source} alt={this.props.alternativeText} />;
  }
}

export default Image;

// arquivo UserProfile.js
import React from 'react';
import Image from './Image';

class UserProfile extends React.Component {
  render() {
    return (
      <div>
        <p> {this.props.user.name} </p>
        <p> {this.props.user.email} </p>
        <Image source={this.props.user.avatar} alt="User avatar" />
      </div>
    );
  }
}

export default UserProfile;

// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import UserProfile from './UserProfile';

class App extends React.Component {
  render() {
    const joao = {
      id: 102,
      name: "João",
      email: "joao@gmail.com",
      avatar: "https:\/\/cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
    };

    const amelia = {
      id: 77,
      name: "Amélia",
      email: "amelia@gmail.com",
      avatar: "https:\/\/cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
    };

    return (
      <div className="App">
        <UserProfile user={joao} />
        <UserProfile user={amelia} />
      </div>
    );
  }
}

export default App;

Analisando o código acima, temos:
1. O componente App é composto por dois componentes UserProfile. Em outras palavras, o componente App é pai dos dois componentes UserProfile. Além disso, <UserProfile user={joao} /> e <UserProfile user={amelia} /> são componentes irmãos, e eles dois são filhos do componente App.

2. O componente UserProfile, por sua vez, possui um componente Image. Ou seja, UserProfile tem Image como filho.

3. Os dados são repassados de componente pai para componente(s) filho(s). Olhando para o código acima, o componente App, que é pai dos dois componentes UserProfile, passa para cada um de seus filhos um objeto com as informações de um perfil. O mesmo pode ser dito olhando para UserProfile, que passa para seu componente filho Image a origem de uma imagem.

Agora, realize este exercício de fixação:

Suponha que você abra uma aplicação React e se depare com os seguintes componentes:

// arquivo Order.js
import React from 'react';

class Order extends React.Component {
  render() {
    const { user, product, price } = this.props.order;

    return (
      <div className="order">
        <p> {user} bought {product} for {price.value} {price.currency} </p>
      </div>
    );
  }
}

export default Order;

// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import Order from './Order';

class App extends React.Component {
  render() {
    const headphone = {
      id: 102,
      user: "cena@gmail.com",
      product: "Razer Headphone",
      price: {
        value: 99.99,
        currency: "dollars"
      }
    };

    const energyDrink = {
      id: 77,
      user: "cena@gmail.com",
      product: "Monster 500mL",
      price: {
        value: 9.99,
        currency: "dollars"
      }
    };

    return (
      <div className="App">
        <h1> Orders recently created </h1>
         {/*  adicione os componentes aqui */}
      </div>
    );
  }
}

export default App;

Vamos agora ver um vídeo que recapitula a aula de ontem e passa por tudo que já vimos! Atenção: até a marca 9m40s o vídeo recapitula o conteúdo da aula anterior. Se não sentir necessidade de recapitular, pule para essa marca!

Crie os componentes acima dentro do diretório src do projeto fixation-exercises-11-2, para poder fazer o exercício a seguir.

Agora, responda ao seguinte, no que diz respeito à composição de componentes:
1. O que o componente App é em relação a Order?

2. Complete o código acima de forma que os pedidos referentes aos produtos headphone e energyDrink sejam filhos de App.


# Texto Externo - Compondo Componentes
Componentes podem se referir a outros componentes em sua saída. Isso nos permite usar a mesma abstração de componente para qualquer nível de detalhe. Um botão, um formulário, uma caixa de diálogo, uma tela: em aplicativos React, todos esses são normalmente expressos como componentes.

Por exemplo, nós podemos criar um componente App que renderiza Welcome muitas vezes:

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// Hello, Sara
// Hello, Cahal
// Hello, Edite

Tipicamente, novos aplicativos React tem um único componente App no topo. Contudo, se você integrar o React em um aplicativo existente, você pode começar de baixo para cima com um pequeno componente como o Button e gradualmente chegar ao topo da hierarquia de exibição.

# Extraindo Componentes
Não tenha medo de dividir componentes em componentes menores.

Por exemplo, considere esse componente Comment:

function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

// Imagem
// Hello Kitty
// I hope you enjoy learning React
// 10/09/2020

Ele aceita author (um objeto), text (uma string) e date (uma data) como props e descreve um comentário em um site de mídia social.

Esse componente pode ser complicado de alterar por causa de todo o aninhamento. Também é difícil reutilizar suas partes individuais. Vamos extrair alguns componentes dele.

Primeiro, nós vamos extrair Avatar:

function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

O Avatar não precisa saber que está sendo renderizado dentro do Comment. É por isso que nós demos ao seu prop um nome mais genérico: user em vez de author.

Nós recomendamos nomear props a partir do ponto de vista do próprio componente ao invés do contexto em que ele está sendo usado.

Agora nós podemos simplificar Comment um pouco mais:

function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <Avatar user={props.author} />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

Em seguida, nós vamos extrair o componente UserInfo que renderiza um Avatar ao lado do nome do usuário:

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

Isso nos permite simplificar Comment ainda mais:

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
// Imagem
// Hello Kitty
// I hope you enjoy learning React
// 10/09/2020

Extrair componentes pode parecer um trabalho pesado no começo, mas ter uma paleta de componentes reutilizáveis compensa em aplicativos maiores. Uma boa regra é que se uma parte da sua UI for usada várias vezes (Button, Panel, Avatar) ou for complexa o suficiente por si só (App, FeedStory, Comment) é uma boa candidata a ser extraída para um componente separado.

# Props são Somente Leitura
Independente se você declarar um componente como uma função ou uma classe, ele nunca deve modificar seus próprios props. Considere essa função sum:

function sum(a, b) {
  return a + b;
}

Tais funções são chamadas “puras” porque elas não tentam alterar suas entradas e sempre retornam o mesmo resultado para as mesmas entradas.

Em contraste, essa função é impura porque altera sua própria entrada:

function withdraw(account, amount) {
  account.total -= amount;
}

React é bastante flexível mas tem uma única regra estrita:

Todos os componentes React tem que agir como funções puras em relação ao seus props.

Obviamente, as UIs de aplicativos são dinâmicas e mudam com o tempo. Na próxima seção, nós vamos introduzir um novo conceito de “state”. O state permite aos componentes React alterar sua saída ao longo do tempo em resposta a ações do usuário, respostas de rede e quaisquer outras coisas, sem violar essa regra.
