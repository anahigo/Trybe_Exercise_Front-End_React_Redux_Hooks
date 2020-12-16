# Introdução ao RTL

No conteúdo de testes já visto no curso, funções eram testadas. Já no RTL o objetivo é testar comportamento, como se algo aparece ou não na tela. Por exemplo:
- Podemos testar se a nossa página possui um título específico (igual aos requisitos que se pedem no projeto!);

- Em uma lista de tarefas, como o projeto Todo list, precisamos verificar, por exemplo, se a funcionalidade de adicionar uma nova tarefa funciona. Para isso, devemos simular o comportamento de quem usa, que seria adicionar um texto no campo de texto alvo e clicar no botão que adiciona a nova tarefa. Para testar se funcionou, verificamos se o texto aparece em algum lugar da página. O RTL nos dá as ferramentas necessárias para realizar essa simulação!

Esses são apenas alguns dentre muitos exemplos! Agora veremos a estrutura desses testes e suas ferramentas:
- Crie uma nova aplicação com o comando npx create-react-app testes-react.
  - Não se preocupe! A biblioteca RTL já vem instalada nos novos projetos.

- Abra a aplicação no VSCode e abra o arquivo App.test.js. Ele está dentro do diretório src.

- Observe o arquivo App.test.js:

import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

O que ele está fazendo é verificar se algum elemento dentro do componente App possui o texto "learn react". Para rodar os testes vá para a pasta src, e execute npm test.

Caso apareça a mensagem abaixo basta clicar a tecla "a".

Após clicar a tecla "a", esse deve ser o resultado:

Como pode ver, o nosso único teste passou. Quer dizer que existe o texto "learn react" dentro do componente App! Se rodar aplicação com o npm start, você encontrará o texto "learn react", conforme indicado pelo teste.

Agora vamos provocar um erro ou uma falha. Mude o texto "learn react" para "algo que não aparece" e rode o teste. Seu terminal acusará este erro:

Ele está falando que não foi possível encontrar um elemento que possui o texto "/algo que não aparece/i".

Dê uma olhada na cheatsheet (https://testing-library.com/docs/react-testing-library/cheatsheet) da react-testing-library. Ela explica de forma resumida como a biblioteca funciona. Nos aprofundaremos nas explicações ao longo deste bloco!

💡 Você ja reparou no arquivo setupTests.js? Por padrão ele é criado junto ao comando npx create-react-app, dentro dele temos comentários e uma importação, essa importação fornece para nossos testes o que chamamos de custom jest matchers. O .toBeInTheDocument() no exemplo acima é um deles, e você pode consultar outros na documentação do jest-dom sempre que precisar.

- Vídeo Trybe

Agora veremos cada parte do código para entender como que a biblioteca de teste funciona. Para testar uma aplicação precisamos seguir alguns passos:

* Renderização
Testar um componente significa, em poucas palavras, renderizá-lo um browser real ou numa simulação de um browser e testar nele o comportamento desejado. Na RTL, é necessário o uso da função render() para fazer isso. Ela simula a renderização de um componente e retorna um objeto com alguns métodos para que se possa simular interações com esse componente. Para ver melhor modifique o teste do arquivo App.test.js:

import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const meuApp = render(<App />);
  const linkElement = meuApp.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

Modificamos a linha que utiliza render(linha 5 do código acima), ela não está mais realizando o object destructuring. Estamos agora salvando todo o conteúdo retornado do render para a variável meuApp.

Agora, para usar o seletor/query getByText, precisamos usar o meuApp.getByText. Observe que ele é muito parecido com os seletores do DOM, como o document.getElementById() ou document.querySelector(). Seguindo a mesma lógica, ao usar o meuApp.getByText(), ele retornará um elemento html.

Para não ter que sempre salvar o retorno da função do render podemos realizar o object destructuring no retorno do render(). Como segue abaixo:

const { getByText } = render (<App />);

# Seletores

- Vídeo Trybe

Seletores ou Queries são métodos que usamos para indicar ao RTL algum elemento da nossa aplicação e assim podermos realizar nossos testes e comparações.

Veremos agora algumas formas de buscar por algum elemento HTML. No exemplo foi visto apenas o getByText que busca por um elemento que possui um determinado texto.

Todos os seletores (queries) estão disponíveis nessa lista de queries da react-testing-library, mas não é necessário ler toda a documentação! Use-a para tirar dúvidas ou procurar algum assunto específico. Veremos algumas queries durante a aula.

Mas como fazer para buscar um elemento que não possui um texto? Como um input? Para isso, existem outros seletores.

Queremos selecionar para o nosso teste um input de email, portanto vamos acrescentar um ao arquivo App.js:

// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <label htmlFor="id-email">
        Email
      </label>
      <input id="id-email" type="email" />
    </div>
  );
}

export default App;

Mudamos a estrutura e adicionamos um campo email com uma label. Precisamos testar se ele está de fato aparecendo na tela. Como ele não possui um texto não podemos usar o getByText, mas podemos usar o getByLabelText, onde ele pegará o input de acordo com o texto da label que está associado a ele. Nesse caso o input está relacionado com a label Email.

// App.test.js
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Verificando se existe o campo Email.', () => {
  const { getByLabelText } = render(<App />);
  const inputEmail = getByLabelText('Email');
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail.type).toBe('email');
});

Como pode ver mudamos os expects também, verificando se o elemento é do tipo correto e se ele está na tela.

Mas e se um campo não tiver texto e nem label? Podemos usar o getByRole. Ele busca pelo atributo role. No caso de um botão, o role é definido pela propriedade type="button". O role serve, por exemplo, para buscar por um elemento <button>Enviar<button/> ou <input type="button" value="Enviar" />.

Adicione um botão ao App.js.

// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <label htmlFor="id-email">
        Email
      </label>
      <input id="id-email" type="email" />
      <input id="btn-send" type="button" value="Enviar" />
    </div>
  );
}

export default App;

Adicione ao arquivo de App.test.js o teste abaixo:

test('Verificando se existe um botão', () => {
  const { getByRole } = render(<App />);
  const btn = getByRole('button');
  expect(btn).toBeInTheDocument();
});

Agora adicione um novo botão na aplicação.

  // App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <label htmlFor="id-email">
        Email
      </label>
      <input id="id-email" type="email" />
      <input id="btn-send" type="button" value="Enviar" />
      <input id="btn-back" type="button" value="Voltar" />
    </div>
  );
}

export default App;

Rode os testes verá que ocorre um erro. O que acontece é que o getByRole espera apenas encontrar um elemento, mas acaba encontrando dois, o botão de Enviar e o de Voltar, pois os dois possuem o role button. Para resolver esse problema precisamos usar outro seletor, o getAllByRole, que armazenará todos os valores encontrados pelo seletor em um array. Para testar precisamos mudar o teste para:

import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Verificando se existe o campo Email.', () => {
  const { getByLabelText } = render(<App />);
  const inputEmail = getByLabelText('Email');
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail.type).toBe('email');
});

// test('Verificando se existe um botão', () => {
//   const { getByRole } = render(<App />);
//   const btn = getByRole('button');
//   expect(btn).toBeInTheDocument();
// });

test('Verificando se existe dois botões', () => {
  const { getAllByRole } = render(<App />);
  const buttons = getAllByRole('button');
  expect(buttons.length).toBe(2);
});

Observe que usamos o tamanho do buttons para verificar se foram encontrados dois botões. Não precisamos apenas usar o .toBeInTheDocument para realizar a verificação de presença no documento!

Foi necessário comentar o nosso segundo teste para não ocorrer um erro. Vamos modifica-lo para verificar se existe um botão de enviar. Para isso usaremos a query getByTestId. Devemos, para usar esse seletor, adicionar uma propriedade ao nosso botão de enviar, o data-testid.

  // App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <label htmlFor="id-email">
        Email
      </label>
      <input id="id-email" type="email" />
      <input id="btn-send" type="button" data-testid="id-send" value="Enviar" />
      <input id="btn-back" type="button" value="Voltar" />
    </div>
  );
}

export default App;

O teste ficará assim:

import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Verificando se existe o campo Email.', () => {
  const { getByLabelText } = render(<App />);
  const inputEmail = getByLabelText('Email');
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail.type).toBe('email');
});

test('Verificando se existe um botão de enviar', () => {
  const { getByTestId } = render(<App />);
  const btn = getByTestId('id-send');
  expect(btn).toBeInTheDocument();
  expect(btn.type).toBe('button');
  expect(btn).toHaveValue('Enviar');
});

test('Verificando se existe dois botões', () => {
  const { getAllByRole } = render(<App />);
  const btn = getAllByRole('button');
  expect(btn.length).toBe(2);
});

Buscamos o elemento pelo data-testid e depois verificamos se ele está na tela e se é um botão com o texto Enviar.

# Testando eventos

- Vídeo Trybe

Por enquanto estamos apenas testando se as coisas estão sendo renderizadas, mas precisamos testar o comportamento do usuário, como um clique em um botão. Para isso se usa o fireEvent. Ele pode ser usado para simular os eventos capturados pelos event listeners dos elementos, como change, keyDown, click e outros. A lista completa de eventos suportados pelo fireEvent é essa. Modificaremos nosso App.js para quem usa poder inserir o seu email no campo, salvá-lo e mostrá-lo na tela:

  // App.js
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      saveEmail: '',
    };
  }

  changeEmail(value) {
    this.setState({ email: value });
  }

  changeSaveEmail(value) {
    this.setState({ saveEmail: value, email: '' });
  }

  render() {
    const { email, saveEmail } = this.state;
    return (
      <div className="App">
        <label htmlFor="id-email">
          Email
        </label>
        <input
          id="id-email"
          value={email}
          type="email"
          onChange={(e) => this.changeEmail(e.target.value)}
        />
        <input
          id="btn-enviar"
          type="button"
          data-testid="id-send"
          value="Enviar"
          onClick={() => this.changeSaveEmail(email)}
        />
        <input id="btn-id" type="button" value="Voltar" />
        <h2 data-testid="id-email-user">{`Valor: ${saveEmail}`}</h2>
      </div>
    );
  }
}

export default App;

Observe as mudanças que foram feitas.

Rode a aplicação e a teste à mão, adicionando seu email no campo e clicando no botão de enviar. Veja se seu email foi salvo.

Agora iremos automatizar cada passo que você fez no código usando os fireEvent, para não ter que toda vez que mudar o código precisar testar a mão cada passo desses. Bastará, ao invés disso, apenas rodar o npm test. Observe cada linha do teste:

// modifique o import abaixo
import { render, fireEvent } from '@testing-library/react';

// Adicione esse teste.
test('Verificando se o botão e o campo email estão funcionando.', () => {
  const { getByTestId, getByLabelText } = render(<App />);

  const EMAIL_USER = 'email@email.com';

  const textEmail = getByTestId('id-email-user');
  expect(textEmail).toBeInTheDocument();
  expect(textEmail).toHaveTextContent('Valor: ');

  const btnSend = getByTestId('id-send');
  const inputEmail = getByLabelText('Email');
  fireEvent.change(inputEmail, { target: { value: EMAIL_USER } });
  fireEvent.click(btnSend);
  expect(inputEmail).toHaveValue('');
  expect(textEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`);
});

Passo a passo:
- Primeiro renderizamos a aplicação, depois salvamos o email do usuário em uma variável (o que é uma boa prática).

- Depois, verificamos se o h2 onde o email aparece na tela está apenas com o texto Valor:,

- Depois procuramos pelo o campo de email e o botão que enviará os dados.

- Simulamos a digitação do usuário no campo de email com o fireEvent.change(inputEmail, { target: { value: EMAIL_USER } });. Quando se passa um segundo parâmetro para a função fireEvent.change estamos adicionando valores às propriedades do evento, nesse caso adicionamos o valor 'email@email.com' ao event.target.value.

- Simulamos um clique no botão com o fireEvent.click(btnSend), o que simula o clique de quem usa no botão.

- Verificamos o campo de email se está vazio e se o h2 onde o valor do email deveria aparecer tem o conteúdo desejado, que é Valor: email@email.com.