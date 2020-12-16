// O editor de código possui um componente JSX simples. Use o método ReactDOM.render() para renderizar este componente na página. Você pode passar elementos JSX definidos diretamente como o primeiro argumento e usar document.getElementById() para selecionar o nó DOM para renderizá-los. Existe um div com id='challenge-node' disponível para você usar. Certifique-se de não alterar a JSX constante.

// const JSX = (
//   <div>
//     <h1>Hello World</h1>
//     <p>Lets render this to the DOM</p>
//   </div>
// );
// // change code below this line

const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// change code below this line

ReactDOM.render(JSX, document.getElementById("challenge-node"))
