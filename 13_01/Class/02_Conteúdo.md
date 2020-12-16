# O Ciclo de Vida de um componente React

- Video Trybe 

Os componentes React, assim como os seres vivos, possuem um ciclo de vida. No caso do React, o ciclo é divido em 4 etapas. São elas:
Inicialização - quando o componente recebe as props e os estados;
- Montagem - quando o componente é inserido no DOM;

- Atualização - quando os props ou estados do componente são alterados;

- Desmontagem - quando o componente morre 🧟‍♂️, sumindo do DOM.

Essa é a big picture, mas dentro dessas 4 etapas existem vários métodos que podemos interceptar para, assim, agir em determinado momento do ciclo de vida dos componentes.

Você pode acessar o diagrama acima, também visto no vídeo, aqui!. O ciclo de vida é acessível por meio de métodos nativos dos class components. Como exemplo, pense no render, que é um método de renderização dos class components e que é chamado toda vez que uma atualização acontece. Ele possui características intrínsecas que permitem adicionar o componente no DOM. Assim como o render, outros métodos possuem suas próprias características e objetivos. (https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

Caso você tenha familiaridade com vídeos em inglês, assista a esse vídeo, que também está presente nos recursos adicionais. Se não se sentir confortável, tudo bem! Os conteúdos abordarão todo o tema. (https://www.youtube.com/watch?v=m_mtV4YaI8c)

O ciclo de vida e os principais métodos funcionam da seguinte maneira:
- Inicialização:
  * constructor - recebe as props e define o estado;

- Montagem:
  * render - renderiza o componente, inserindo-o no DOM;
  * componentDidMount - dispara uma ou mais ações após o componente ser inserido no DOM (ideal para requisições);

- Atualização:
  * shouldComponentUpdate - possibilita autorizar ou não o componente a atualizar;
  * componentDidUpdate - dispara uma ou mais ações após o componente ser atualizado;

- Desmontagem:
  * componentWillUmount - dispara uma ou mais ações antes de o componente ser desmontado.

Além dos métodos citados, há também outros que o próprio React intitula de Métodos Raramente Usados, como o getDerivedStateFromProps e getSnapshotBeforeUpdate, e que não serão o foco desta aula. Caso tenha interesse, você pode aprender sobre eles neste link.(https://pt-br.reactjs.org/docs/react-component.html#static-getderivedstatefromprops)

- Video Trybe 

# Construindo um contador
Vamos agora fazer uma simulação, para ver na prática quando cada método é chamado:

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    console.log("construtor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  render() {
    console.log("render");
    return (
      <div>
        <p>Contador</p>
        <button
          onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}
        >
          Soma
        </button>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}

Executando o código acima no browser, sem o clique no botão Soma, aparecerão as seguintes mensagens no console:

Atente-se para a ordem de chamada dos métodos. As mensagens refletem a ordem de execução dos métodos de ciclo de vida do componente.

Os métodos shouldComponentUpdate e componentDidUpdate não apareceram no console, pois não houve atualização. Caso o botão Soma seja clicado, teremos mais mensagens no console:

Imagem que mostra as mensagens 'constructor', 'render', 'componentDidMount', 'shouldComponentUpdate' e 'componentDidUpdate' no console
Note que, durante o processo de atualização, o método render é chamado novamente. Isso acontece porque, quando se atualiza uma props ou estado, o React "pede" que o componente seja renderizado no DOM. Como apresentamos acima, caso seja válido, podemos impedir essa renderização retornando false com o método shouldComponentUpdate.

Podemos também, nos métodos shouldComponentUpdate e componentDidUpdate, acessar os estados ou props próximos e anteriores. Para isso, devemos utilizar os parâmetros nextProps e nextState no shouldComponentUpdate e prevProps e prevState no componentDidUpdate. Veja um exemplo:

Antes, vamos alterar os console.log() dos métodos citados acima:

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", this.state, nextState);
    return true;
  }

  componentDidUpdate(prevPros, prevState) {
    console.log("componentDidUpdate", this.state, prevState);
  }

Clicando uma vez no botão Somar, temos:

Perceba que o estado só é de fato atualizado quando chega no método componentDidUpdate. Por isso, caso seja necessário impedir uma renderização, você deve utilizar o método shouldComponentUpdate, que permite comparar os atuais e próximos estados ou props e adicionar a lógica.

Agora, vamos dividir nosso componente Counter em dois. O pai será App e terá toda a lógica, enquanto o filho será CounterDisplay e apenas exibirá o valor do contador. Imagine que você queira que apenas números múltiplos de 3 sejam exibidos, mas que, devido a complicações, não há como alterar o componente App. Você deve utilizar os métodos de ciclo de vida para solucionar isso:

// App.js
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <div>
        Contador
        <button
          onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}>
          Soma
        </button>
        <CounterDisplay value={this.state.counter} />
      </div>
    );
  }
}

// CounterDisplay.js
class CounterDisplay extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.value % 3 !== 0) return false;
    return true;
  }

  render() {
    return <div> counter: {this.props.value}</div>;
  }
}

Se você rodar a aplicação, vai perceber que, apesar de o método shouldComponentUpdate estar retornando false para quando a props não for um múltiplo de 3, o valor da props continua atualizando, só não é renderizado. Isso significa que o método impede apenas a renderização ou atualização do componente no DOM, mas não a atualização de estado ou props.

# Renderização condicional e atualização de arrays no estado

- Video Trybe 

Vimos no vídeo como fazemos para garantir que algo só rode depois do estado ser atualizado! Passamos como segundo parâmetro da this.setState uma callback com a dita lógica!

this.setState({ meuEstado: novoValor }, () => {
  // ... Sua lógica aqui
})

E para o caso mais complicado? Isto é, atualizar o estado baseado no estado anterior e executar alguma lógica somente depois do estado atualizar ao mesmo tempo?! Nesse caso tanto o primeiro parâmetro quanto o segundo são callbacks!

this.setState(
  (estadoAnterior) => ({ meuEstado: estadoAnterior }), // Primeiro parâmetro!
  () => { /* ... Sua lógica aqui */ } // Segundo parâmetro!
)

A sintaxe é um tanto confusa, mas guarde isso na sua caixa de ferramentas para fazer lógicas de Loading... quando se está esperando a resposta de uma API! E lembre-se: como a this.setState não retorna uma promise, usar async/await com ela NUNCA vai funcionar.

💡 Aprendemos no vídeo também sobre como atualizar arrays no estado com base no estado anterior! Use o spread operator! this.setState(({ meuArrayNoEstado }) => ({meuArrayNoEstado: [...meuArrayNoEstado, novoElemento] }))

# Para fixar
1. Faça este exercício sobre componentDidMount

2. Utilizando o código do componente Counter adicione, imediatamente após sua montagem, o valor 10 na chave counter do estado.

3. Com o mesmo código do exercício anterior, impeça que a renderização seja feita, caso o valor na chave counter esteja entre 13 e 15.

Por último, reforce seu entendimento sobre onde colocar as requisições assíncronas no React:onde devemos integrar chamadas de APIs? Para ler mais tarde também, guarde esse conteúdo da documentação do React dá uma visão detalhada de cada método de ciclo de vida do React. Pare antes da sessão "static getDerivedStateFromProps()".
(https://pt-br.reactjs.org/docs/faq-ajax.html)
(https://pt-br.reactjs.org/docs/react-component.html#commonly-used-lifecycle-methods)