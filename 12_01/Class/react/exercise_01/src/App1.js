import React, { Component } from "react";

function handleClick1() {
  console.log('Clicou! Apareceu 1')
}

class App1 extends Component {
  render() {
    return <button onClick={handleClick1}>Meu botão 1</button>
  }
}

export default App1;