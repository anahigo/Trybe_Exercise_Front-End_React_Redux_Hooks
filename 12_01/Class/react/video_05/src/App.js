import React from 'react';
import './App.css';

class App extends React.Component {
  constructor () {
    super()
    this.handleClick = this.handleClick.bind(this)
    console.log('Componente sendo construído')
  }
  handleClick() {
    console.log(this)
    console.log('Clicou!')
  }
  render() {
    console.log
    return <button onClick={this.handleClick}>Meu botão</button>
  }
}

export default App;
