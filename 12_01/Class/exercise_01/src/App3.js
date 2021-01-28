import React, { Component } from "react";

function handleClick3() {
  console.log('Clicou! Apareceu 3')
}

class App3 extends Component {
  render() {
    return <button onClick={handleClick3}>Meu botão 3</button>
  }
}

export default App3;