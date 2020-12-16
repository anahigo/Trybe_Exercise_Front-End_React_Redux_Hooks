import React from 'react';
import './App.css';

function handleClick() {
  console.log('Clicou!')
}

class App extends React.Component {
  render() {
    return <button onClick={handleClick}>Meu botão</button>
  }
}

export default App;

