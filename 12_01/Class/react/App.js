import React from 'react';

class App extends React.Component {
  constructor () {
    super()
    this.buttonOne = this.buttonOne.bind(this)
    this.buttonTwo = this.buttonTwo.bind(this)
    this.buttonThree = this.buttonThree.bind(this)
    this.state = {
      numeroDeCliques: 0
    }
  }

  buttonOne() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))       
    console.log('Button One')
  }

  buttonTwo() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    })) 
    console.log('Button Two')
  }

  buttonThree() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    })) 
    console.log('Button Three')
  }

  render() {
    return (
      <div>
        <button onClick={this.buttonOne}>{this.state.numeroDeCliques}</button>
        <button onClick={this.buttonTwo}>{this.state.numeroDeCliques}</button>
        <button onClick={this.buttonThree}>{this.state.numeroDeCliques}</button>
      </div>
    )
  }
}

export default App;
