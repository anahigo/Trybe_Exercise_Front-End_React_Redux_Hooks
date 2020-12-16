# State vs Props

Você pode entender a diferença props vs state da seguinte forma:
 * props são uma forma de passar dados de pai para filho.

 * state é reservado para dados que seu componente controla.

O conceito é: state deve servir para guardar valores/estados do Componente que mudam com o uso do mesmo, para guardar uma alteração de estado que pode ter efeito na renderização do próprio componente. As props são valores estáticos, ou que no contexto de um Componente sejam estáticos, ou seja, não sofrem alteração dentro do escopo do componente que as recebe.

Pelos princípios do React você nunca deve tentar alterar o que um componente recebe como props como no exemplo abaixo:

this.props.name = 'novo nome';
