# Exercise

1 - Você irá desenvolver 3 exercícios para solidificar seus conhecimentos de Redux com React.
  - No primeiro exercício, desenvolveremos um semáforo simples.
  - No segundo trabalharemos com mais estados aplicando movimento em 3 carros.
  - E para finalizar iremos combinar ambos os exercícios em um só, utilizando o combineReducers .

O README do repositório exercise-react-with-redux-intro tem as instruções mais detalhadas para o exercício.
(https://github.com/tryber/exercise-react-with-redux-intro)

# COMEÇANDO OS EXERCÍCIOS
Dica: Use o Redux Devtools para ver o estado da sua aplicação em seu navegador.

# Exercício 1
  - Nesse exercício temos três botões de nomes Red, Yellow e Green. Esses botões devem ao serem clicados, passar um estado para o Redux com seus nomes.

  - Esse estado irá ser utilizado para carregar a imagem com a luz de semáforo acesa condizente com o nome do botão clicado.

  - Nesse exercício toda a store já está pronta, o único arquivo a ser alterado é o arquivo de nome TrafficSignal.jsx.

- Utilize Redux para armazenar todo o estado da aplicação

# Exercício 2
  - Nesse exercício temos três carros com as cores Red, Blue e Yellow. Cada um deles apresenta um botão que ao ser clicado passa um estado para o Redux com um booleano.

  - Esse estado irá ser utilizado para alterar o CSS com a imagem do carro, para que ele se mova ou não.

  - Nesse exercício toda a store já está pronta, o único arquivo a ser alterado é o arquivo de nome Cars.jsx.

  - Utilize Redux para armazenar todo o estado da aplicação.

# Exercício 3
  - Nesse exercício utilizaremos os códigos dos exercícios 1 e 2. Aqui vamos juntar (combinar) os reducers dos dois primeiros exercícios, para que eles possam ser carregados juntos na mesma página da aplicação.

  - O funcionamento dos dois componentes DEVE se manter o mesmo.

  - Nesse exercício toda a store já está pronta, você precisará criar os arquivos para cada reducer e mover o código do reducer de cada exercício para um arquivo diferente, utilizar o arquivo redux/index.js para montar sua store e combinar os dois reducers. Além de alterar os componentes Cars.jsx e TrafficSignal.jsx para receberem seus respectivos reducers.

  - Utilize Redux para armazenar todo o estado da aplicação.

# Bônus
4 - Refatore a aplicação do Todo List .
(https://github.com/tryber/exercise-todo-list)

  - Os testes em redux não serão necessários nesse momento. Você aprenderá sobre eles ao longo do bloco.

  - Adicione filtros para apresentar apenas as tarefas concluídas e outro para exibir as tarefas em progresso.

  - Utilize Redux para armazenar todo o estado da aplicação.

  - BÔNUS Implemente a função de desfazer ações. Ações são "adicionar item", "marcar como completo" e "marcar como em andamento".

Observação: busque utilizar todos os conceitos, métodos e funcionalidades que você aprendeu.

- Store

- connect

- mapStateToProps

- mapDispatchToProps

- reducers

- combineReducers

- actions

Existem várias boas práticas que podem ser adotadas durante os exercícios. Busque implementá-las.