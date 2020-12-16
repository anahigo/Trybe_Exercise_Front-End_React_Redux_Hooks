# Lista de componentes e chaves
Agora que você já sabe o que é componente e como compô-lo, suponha que você precise implementar um componente que renderiza uma lista de compras. Entretanto, você não sabe de antemão os elementos dessa lista. Como você renderizaria dinamicamente essa lista de compras?

Você precisa atribuir uma chave, um identificador, para cada um dos elementos, e para entender com mais detalhes leia este artigo (https://pt-br.reactjs.org/docs/lists-and-keys.html)

Agora vamos fazer este exercício de fixação:

Lembra do código de exemplo da seção anterior, referente à composição de componentes? Crie os componentes Image, UserProfile e App no diretório src do projeto fixation-exercises-11-2, e vamos olhar especificamente para o arquivo App.js:


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

O componente App possui dois componentes UserProfile como filho. Que tal gerar esses componentes filhos dinamicamente? Isso poderia ser feito da seguinte forma:

// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import UserProfile from './UserProfile';

class App extends React.Component {
  render() {
    const users = [
      {
        id: 102,
        name: "João",
        email: "joao@gmail.com",
        avatar: "https:\/\/cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
      },
      {
        id: 77,
        name: "Amélia",
        email: "amelia@gmail.com",
        avatar: "https:\/\/cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
      }
    ];

    return (
      <div className="App">
        {users.map(user => <UserProfile user={user} />)}
      </div>
    );
  }
}

export default App;

Entretanto, a geração dinâmica dos componentes está incompleta, haja vista que é preciso passar uma key para UserProfile. Você pode averiguar isso copiando o código acima e entrando no console do Google Chrome, que lá vai estar presente um warning levantado pelo React.

Dito isso, altere a chamada do componente de UserProfile de forma que a lista seja gerada dinamicamente de maneira adequada.

# Texto Externo - Listas e Chaves
Primeiro, vamos rever como transformamos listas em JavaScript.

Dado o código abaixo, nós usamos a função map() para receber um array de números e dobrar o valor de cada um deles. Atribuímos o novo array retornado pela função map() para a variável doubled e imprime no console:

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);

Esse código imprime [2, 4, 6, 8, 10] no console.

No React, transformar arrays em listas de elementos é praticamente idêntico a isso.

# Renderizando Múltiplos Componentes
Você pode criar coleções de elementos e adicioná-los no JSX usando chaves {}.

Abaixo, iteramos pelo array numbers usando a função map() do JavaScript. Retornamos um elemento <li> para cada item. Finalmente, atribuímos o array de elementos resultante para listItems:

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);

Adicionamos todo o array listItems dentro de um elemento <ul> e renderizamos ele no DOM:

ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('root')
);

Esse código mostra uma lista não ordenada de números entre 1 e 5.

# Componente de Lista Básico
Geralmente você irá renderizar listas dentro de um componente.

Podemos refatorar o exemplo anterior em um componente que aceita um array de números e retorna uma lista de elementos.

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);

Ao executar esse código, você receberá um aviso que uma chave deve ser definida para os itens da lista. key é um atributo string especial que você precisa definir ao criar listas de elementos. Iremos analisar os motivos pelos quais isso é importante na próxima seção.

Vamos atribuir uma key aos itens da nossa lista dentro de numbers.map() e resolver o valor da chave que está em falta.

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);

# Chaves
As chaves ajudam o React a identificar quais itens sofreram alterações, foram adicionados ou removidos. As chaves devem ser atribuídas aos elementos dentro do array para dar uma identidade estável aos elementos:

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);

A melhor forma de escolher uma chave é usar uma string que identifica unicamente um item da lista dentre os demais. Na maioria das vezes você usaria IDs de seus dados como chave:

const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
);

Quando você não possui nenhum ID estável para os itens renderizados, você pode usar o índice do item como chave em último recurso:

const todoItems = todos.map((todo, index) =>
  // Apenas faça isso caso os itens não possuam IDs estáveis
  <li key={index}>
    {todo.text}
  </li>
);

Não recomendamos o uso de índices para chave se a ordem dos itens pode ser alterada. Isso pode impactar de forma negativa o desempenho e poderá causar problemas com o estado do componente. Leia o artigo escrito por Robin Pokorny para uma explicação aprofundada nos impactos negativos de se usar um índice como chave. Se você não atribuir uma chave de forma explícita para os itens de uma lista, então o React irá utilizar os índices como chave por padrão.

Aqui você poderá ver uma explicação aprofundada sobre o porquê o uso das chaves é necessário caso você esteja interessado em aprender mais sobre isso.

# Extraindo Componentes com Chaves
As chaves apenas fazem sentido no contexto do array que está encapsulando os itens.

Por exemplo, se você extrai um componente ListItem, você deve deixar a chave nos elementos <ListItem /> ao invés de deixar no elemento <li> dentro de ListItem.

Exemplo: Uso Incorreto de Chaves

function ListItem(props) {
  const value = props.value;
  return (
    // Errado! Não há necessidade de definir a chave aqui:
    <li key={value.toString()}>
      {value}
    </li>
  );
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Errado! A chave deveria ser definida aqui:
    <ListItem value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);

Exemplo: Uso Correto de Chaves

function ListItem(props) {
  // Correto! Não há necessidade de definir a chave aqui:
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Correto! A chave deve ser definida dentro do array.
    <ListItem key={number.toString()} value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);

Por via de regra, os elementos dentro de uma função map() devem especificar chaves.

# Chaves devem ser Únicas apenas entre Elementos Irmãos
Chaves usadas nos arrays devem ser únicas entre seus elementos irmãos. Contudo elas não precisam ser únicas globalmente. Podemos usar as mesmas chaves ao criar dois arrays diferentes:

function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

ReactDOM.render(
  <Blog posts={posts} />,
  document.getElementById('root')
);

As chaves servem como uma dica para o React. Mas elas não são passadas para os componentes. Se você precisar do mesmo valor em um componente, defina ele explicitamente como uma prop com um nome diferente:

const content = posts.map((post) =>
  <Post
    key={post.id}
    id={post.id}
    title={post.title} />
);

No exemplo acima, o componente Post pode acessar props.id. Mas, não pode acessar props.key.

# Incluindo map() no JSX
Nos exemplos acima declaramos uma variável listItems separada e adicionamos ela no JSX:

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <ListItem key={number.toString()}
              value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

O JSX permite incluir qualquer expressão dentro de chaves, então podemos adicionar o resultado do map() diretamente:

function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) =>
        <ListItem key={number.toString()}
                  value={number} />
      )}
    </ul>
  );
}

Às vezes isso resulta em um código mais limpo. Mas esse padrão também pode ser confuso. Como em JavaScript, depende de você decidir se vale a pena extrair uma variável para aumentar a legibilidade. Lembre-se que se o corpo da função map() tiver muitos níveis, poderá ser um bom momento para extrair um componente.