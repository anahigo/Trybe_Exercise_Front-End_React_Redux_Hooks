# Single Page Application
Antes de começar a falar sobre React Router, é preciso entender um tipo de aplicação chamado Single Page Application (SPA), haja vista que aplicações em React Router são SPAs. Logo, assista a este vídeo, que explica o conceito e o funcionamento de uma SPA.

- Vídeo Trybe

# props.children
Children é uma ótima ferramenta para reutilização de componentes. A utilização é bem simples, veja abaixo:

class App extends Component {
  render() {
    return (
      <div className='main'>
        <ComponentePai>
          <p>SUPIMPA</p>
        </ComponentePai>
      </div>
    )
  }
}

E dessa forma podemos acessar e exibir na tela o valor SUPIMPA no ComponentePai:

const ComponentePai = (props) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

Nesse exemplo utilizamos uma tag p, mas note que poderia ser um ou vários elementos de qualquer natureza, seja uma tag, ou até um componente. Ainda sim, ela é acessada da mesma forma dentro de ComponentePai. É importante perceber que, no caso acima, props.children é um objeto por ser apenas um elemento. Caso o ComponentePai esteja com mais de um elemento dentro como no exemplo abaixo, props.children se torna um array de objetos, com as informações de cada filho.

class App extends Component {
  render() {
    return (
      <div className='main'>
        <ComponentePai>
          <p>SUPIMPA</p>
          <h1>BACANA</h1>
          <span>INCRÍVEL</span>
        </ComponentePai>
      </div>
    )
  }
}

# Instalação React Router Dom
Para poder fazer uso de React Router, é preciso que se instale em uma aplicação React o pacote react-router-dom:

npm install react-router-dom