import React, { Component } from "react";

function handleClick2() {
  console.log('Clicou! Apareceu 2')
}

class App2 extends Component {
  render() {
    return <button onClick={handleClick2}>Meu botão 2</button>
  }
}

export default App2;