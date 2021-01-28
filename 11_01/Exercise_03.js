// 1 - O código atual usa JSX para atribuir um elemento div à constante JSX. Substitua o div por um elemento h1 e adicione o texto Hello JSX! dentro dele.

// const JSX = <div></div>;

const JSX = <h1>Hello JSX!</h1>;

// 2 - Defina uma nova constante JSX que renderiza um div que contém os seguintes elementos em ordem:

// Um h1, um p e uma lista não ordenada que contém três li itens. Você pode incluir qualquer texto que desejar em cada elemento.

// Nota:  Ao renderizar vários elementos como este, você pode colocá-los todos entre parênteses, mas não é estritamente necessário. Observe também que este desafio usa uma divtag para envolver todos os elementos filhos em um único elemento pai. Se você remover o div, o JSX não irá mais transpilar. Lembre-se disso, pois também se aplicará quando você retornar elementos JSX nos componentes React.

// write your code here

const JSX = (
  <div>
    <h1>Text One</h1>
    <p>Text Two</p>
    <ul>
      <li>Text Three A</li>
      <li>Text Three B</li>
      <li>Text Three C</li>
    </ul>
  </div>
)

// 3 - O editor de código possui um elemento JSX semelhante ao que você criou no último desafio. Adicione um comentário em algum lugar dentro do divelemento fornecido , sem modificar os elementos h1 ou p existentes .

// const JSX = (
//   <div>
//     <h1>This is a block of JSX</h1>
//     <p>Here's a subtitle</p>
//   </div>
// );

const JSX = (
  <div>
    {/* isso é um comentário */}
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
  </div>
);

// 4 - O editor de código possui um componente JSX simples. Use o método ReactDOM.render() para renderizar este componente na página. Você pode passar elementos JSX definidos diretamente como o primeiro argumento e usar document.getElementById() para selecionar o nó DOM para renderizá-los. Existe um div com id='challenge-node' disponível para você usar. Certifique-se de não alterar a constante JSX .

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
ReactDOM.render(JSX, document.getElementById('challenge-node'))

// 5 - Aplique uma classe de myDiv ao div fornecido no código JSX.

// const JSX = (
//   <div>
//     <h1>Add a class to this div</h1>
//   </div>
// );

const JSX = (
  <div className='myDiv'>
    <h1>Add a class to this div</h1>
  </div>
);

// 6 - Corrija os erros no editor de código para que seja JSX válido e seja transpilado com êxito. Certifique-se de não alterar nada do conteúdo - você só precisa fechar as tags onde são necessárias.

// const JSX = (
//   <div>
//     {/* remove comment and change code below this line
//     <h2>Welcome to React!</h2> <br >
//     <p>Be sure to close all tags!</p>
//     <hr >
//     remove comment and change code above this line */}
//   </div>
// );

const JSX = (
  <div>
    <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
);

// 7 - O editor de código tem uma função chamada MyComponent. Conclua esta função para que ela retorne um único elemento div que contenha alguma string de texto.

// Observação:  o texto é considerado filho do divelemento, portanto, você não poderá usar uma tag de fechamento automático.

// const MyComponent = function() {
//   // change code below this line
//   // change code above this line
// }

const MyComponent = function() {
  // change code below this line
  return (
    <div>
      <p>String</p>
    </div>
  );
  // change code above this line
}

// 8 - MyComponent é definido no editor de código usando a sintaxe de classe. Termine de escrever o método render para que ele retorne um elemento div que contenha um h1 com o texto Hello React!.

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     // change code below this line
//     // change code above this line
//   }
// };


class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // change code below this line
    return (
      <div>
        <h1>Hello React!</h1>
      </div>
    )
    // change code above this line
  }
};

// 9 - No editor de código, existe um componente funcional simples chamado ChildComponente um componente de classe chamado ParentComponent. Componha os dois juntos, renderizando o ChildComponent dentro de ParentComponent. Certifique-se de fechar a tag ChildComponent com uma barra.

// Nota: ChildComponent é definido com uma função de seta ES6 porque esta é uma prática muito comum ao usar o React. Porém, saiba que esta é apenas uma função. Se você não está familiarizado com a sintaxe da função de seta, consulte a seção JavaScript.

// const ChildComponent = () => {
//   return (
//     <div>
//       <p>I am the child</p>
//     </div>
//   );
// };

// class ParentComponent extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <h1>I am the parent</h1>
//         { /* change code below this line */ }
//         { /* change code above this line */ }
//       </div>
//     );
//   }
// };


const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* change code below this line */ }
          <ChildComponent />
        { /* change code above this line */ }
      </div>
    );
  }
};
