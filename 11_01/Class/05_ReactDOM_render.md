# ReactDOM.render
No texto a seguir você lerá sobre o ReactDOM.render, que é o responsável por renderizar e atualizar seu código dentro do HTML, exibindo seus elementos React.

- Vamos aprender como o ReactDOM.render funciona com este conteúdo;
(https://pt-br.reactjs.org/docs/rendering-elements.html)

- Agora faça este exercício para fixar. (https://www.freecodecamp.org/learn/front-end-libraries/react/render-html-elements-to-the-dom)

# Texto Externo - Renderizando Elementos
Elementos são os menores blocos de construção de aplicativos React.

Um elemento descreve o que você quer ver na tela:

const element = <h1>Hello, world</h1>;

Diferente de elementos DOM do navegador, elementos React são objetos simples e utilizam menos recursos. O React DOM é o responsável por atualizar o DOM para exibir os elementos React.

Nota:
Pode-se confundir elementos com o conceito mais amplo de “componentes”. Nós apresentaremos os componentes na seção seguinte. Elementos compõem os componentes e nós recomendamos ler esta seção antes de prosseguir.

# Renderizando um Elemento no DOM
Suponhamos que exista um <div> em algum lugar do seu código HTML:

<div id="root"></div>

Nós o chamamos de nó raiz do DOM porque tudo dentro dele será gerenciado pelo React DOM.

Aplicações construídas apenas com React geralmente tem apenas um único nó raiz no DOM. Se deseja integrar o React a uma aplicação existente, você pode ter quantos nós raiz precisar.

Para renderizar um elemento React em um nó raiz, passe ambos para ReactDOM.render()`:

const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));

Assim, é exibido “Hello, world” na página.

# Atualizando o Elemento Renderizado
Elementos React são imutáveis. Uma vez criados, você não pode alterar seus elementos filhos ou atributos.

Com o que aprendemos até agora, a única forma de atualizar a interface é criar um novo elemento e passá-lo para ReactDOM.render().

Veja o seguinte exemplo de um relógio:

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);

Chama-se o ReactDOM.render() a cada segundo a partir de um callback do setInterval().

Nota:
Na prática, a maioria dos aplicativos React usam o ReactDOM.render() apenas uma única vez. Nas seções seguintes, aprenderemos como esse código pode ser encapsulado em componentes com estado.

Recomendamos que você não pule os tópicos porque eles se complementam.

# O React Somente Atualiza o Necessário
O React DOM compara o elemento novo e seus filhos com os anteriores e somente aplica as modificações necessárias no DOM para levá-lo ao estado desejado.

Você pode observar isso inspecionando o último exemplo com as ferramentas do navegador:

Ferramenta de inspecionar elemento do DOM mostrando atualizações granulares

Embora nós criemos um elemento descrevendo toda a estrutura da interface a cada segundo, apenas o nó de texto cujo conteúdo foi alterado é atualizado pelo React DOM.

Em nossa experiência, pensar em como a interface do usuário deve ficar a qualquer momento, em vez de como alterá-la ao longo do tempo, elimina toda uma série de bugs.