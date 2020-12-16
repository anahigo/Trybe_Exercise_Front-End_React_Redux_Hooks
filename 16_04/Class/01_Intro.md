# O que vamos aprender?
Vamos recapitular o que você aprendeu até então:
- Você aprendeu a fazer uso de Redux para prover gerenciamento de estado à sua aplicação;

- Você viu como o fluxo de dados funciona em uma aplicação que usa Redux se baseia em 3 entidades fundamentais:
  1. store, que é a única fonte da verdade referente ao estado compartilhado da sua aplicação. Ou seja, é na store e somente lá que se encontram os dados compartilhados da sua aplicação.

  2. actions, que são nada mais que simples objetos JavaScript que descrevem um evento que acabou de acontecer. É obrigatório que haja pelo menos a propriedade type no objeto, para que seja possível identificar qual evento ocorreu. Para uma action é feito um envio (dispatch) através store para um reducer. Para que uma action seja reutilizada ao longo de sua aplicação, em Redux existe o conceito action creators que, como o próprio nome diz, nada mais são do que funções que criam uma action. Uma boa prática é inserir todas as suas actions dentro de uma única pasta, separada de demais arquivos.

  3. reducer, que é uma função pura: dada a mesma entrada, retorna sempre a mesma saída e não tem efeitos colaterais, ou seja, não altera nada fora dela mesma. Ele tem como responsabilidade gerenciar o estado da store de acordo com a action recebida. Ou seja, ele provê um novo estado para a store, com as devidas alterações relacionadas a action que lhe foi entregue. É possível combinar vários reducers A, B, ..., N em um reducer X só, de forma que somente X seja enviado para criar a store. Assim como as actions, é uma boa prática inserir todos os seus reducers em uma pasta própria.

- Por fim, você viu como integrar Redux com React, haja visto que Redux não é exclusivo para aplicações React. Tal integração é feita via o pacote react-redux, permitindo que componentes React consigam acessar a store e enviar actions para ela.

Foquemos agora no fluxo de dados de uma aplicação Redux: "out of the box", o Redux suporta somente o fluxo síncrono de dados, e isso consegue ser percebido ao olhar para actions: uma action é um objeto JavaScript que descreve algum evento que já aconteceu e esse objeto é enviado para a store para que seu estado seja atualizado.

Mas, e se fosse preciso ter uma action assíncrona, que precisa fazer uma requisição para uma API, de forma que os devidos dados necessários estejam presentes para gerar a action? De antemão não teríamos tais dados para formar essa action, esse objeto, haja visto que é preciso esperar pela requisição ser concluída. Logo, como se cria actions assíncronas? É isso que você aprenderá na aula de hoje.

- Video Trybe 

# Você será capaz de:
- Criar actions assíncronas na sua aplicação React que faz uso de Redux.

# Por que isso é importante?
Na sua carreira de desenvolvimento operações assíncronas serão extremamente recorrentes. Agora que você está usando Redux, vai ser comum você precisar salvar na store algum dado que veio de forma assíncrona (um endpoint que retorna informações do usuário logado, para que esteja disponível para sua aplicação, por exemplo).

Tal necessidade, por si só, não é sanada pelo pacote Redux, haja visto que ele suporta somente fluxo síncrono de dados. Isso faz com que seja necessário fazer uso de outros pacotes, entre eles o mais popular: redux-thunk. Tal pacote provê uma interface simples para dar suporte a action creators que geram actions assíncronas, e é ele que você aprenderá para tornar sua aplicação mais completa.