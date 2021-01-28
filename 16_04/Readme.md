# Exercise

1 - Hora de colocar em prática tudo que você aprendeu até então, fazendo este exercício de fixação.
(https://www.freecodecamp.org/learn/front-end-libraries/redux/use-middleware-to-handle-asynchronous-actions)

2 - Vamos fazer uma pequena aplicação que nos permitirá buscar informações sobre os personagens da famosa série de livros "As Crônicas de Gelo e Fogo", que gerou a famosa série Game of Thrones .

No repositório linkado abaixo você encontrará alguns componentes React prontos e maiores informações a respeito.
Vamos lá, pois O inverno está chegando .

Link do repositório (https://github.com/tryber/exercise-game-of-thrones-characters)

# COMEÇANDO OS EXERCÍCIOS
Exercício 1
Vamos fazer uma pequena aplicação que nos permitirá buscar informações sobre os personagens da famosa série de livros "As Crônicas de Gelo e Fogo", que gerou a famosa série Game of Thrones.

Neste repositório você encontrará alguns componentes React prontos. Além do próprio App, você terá o componente SearchForm - que se trata de um componente de classe que armazena o valor de inputText na medida que se digita algo no campo de busca e, quando se clica no botão da página, leva o texto digitado como valor de characterSearched.

Já o componente characterInfo exibe na tela informações obtidas através da API (que já está disponível para uso na pasta services) - tais como o nome completo, os apelidos, o gênero e os livros em que o personagem aparece. Se ficou sem entender alguma parte, estude a aplicação e coloque um console.log() na propriedade que estiver com dúvidas.

Então, a API está pronta, os componentes estão prontos, mas precisamos obter as informações da API e passar suas informações para a tela. Para tanto:

1- Execute o comando npm install e instale os pacotes redux, react-redux e redux-thunk. Crie o thunk que fará a requisição para a API e as actions referentes ao retorno com sucesso ou falha na dita requisição (não se esqueça de importar a função charAPI.js no seu arquivo actions.js).

2- Crie o Reducer que tratará as actions criadas no passo 1 e insira-o no combineReducers. Importante: a API retorna uma array com um único objeto, logo você precisa acessar a posição correta do array para, em seguida, se utilizar do objeto.

3- Conecte a action a ser despachada no seu componente SearchForm e os states oriundos do reducer no componente characterInfo, bem como prepare o componente para exibir uma mensagem em caso de erro da API.

4- Utilize a Prop importadas do seu reducer para renderizar o as informações na tela. Ao final, sua aplicação ficará mais ou menos assim:

# Bônus
Como Redux exige muita prática, eis aqui mais um exercício! Desta vez, um mini-projeto para se desenvolver e guardar no portfólio!

Conhece o Reddit ? É uma comunidade na qual pessoas conseguem criar grupos de discussão acerca de algum assunto. Tal grupo é chamado de subreddit . Para cada subreddit pessoas podem fazer postagens ( posts ). Como exercício, você vai fazer uma aplicação que permite a quem usá-la ver posts referentes a 2 subreddits :
  1 - reactjs
  2 - frontend

Sua aplicação deve permitir a quem usá-la poder escolher de qual subreddit se deseja ver as postagens. No momento que selecionar o subreddit , uma requisição precisa ser feita no reddit para buscar os posts referentes ao subreddit escolhido. Para cada postagem você precisa mostrar pelo menos o título do post . Além disso, sua aplicação deve permitir a quem usá-la a possibilidade de atualizar a lista de postagens referentes ao subreddit escolhido.

É obrigatório que você gerencie o estado de sua aplicação com Redux , guardando os subreddits , assim como os posts de cada subreddit , no store . Você precisa fazer uso do redux-thunk para permitir criar actions assíncronas.

  *Pontos importantes:*

1 - Para buscar os posts referentes a um subreddit , você pode fazer uma requisição GET para https://www.reddit.com/r/<subreddit>.json . Ou seja, se você precisar buscar posts do subreddit reactjs , você faria uma chamada para https://www.reddit.com/r/reactjs.json .

    No json retornado você encontra os dados referentes aos posts dentro da propriedade data.children . Para cada post dentro de data.children você encontra seu título correspondente na propriedade data.title .

2 - Antes de começar a sair implementando, pare e pense sobre como desenhar o estado da sua aplicação. O que você precisa guardar no estado? Como você vai estruturar e organizar seus dados? Quais actions você precisa ter para modelar os eventos que ocorrerão na sua aplicação (fazer uma requisição, obter sua resposta, atualizar a lista, etc...)? Como você vai organizar seus reducers (lembrando que NUNCA deve-se alterar o estado, e sim criar um novo )?

3 - Como você está fazendo uma requisição de um recurso externo, o que acontece se a requisição de postagens referentes a um subreddit falhar? Adicione na sua aplicação tratamento de erro para esses casos, salvando no estado da sua aplicação a mensagem de erro para o subreddit correspondente. Dica: procure e investigue no Google como fazer tratamento de erro de requisição no contexto de Redux .

4 - Como forma de ter um melhor diagnóstico sobre o fluxo de dados em uma aplicação Redux , instale o middleware redux-logger e o integre na sua aplicação.

5 - Instale a extensão do Chrome redux-dev-tools e a integre na sua aplicação. Com isso, você tem um ambiente completo para poder analisar e depurar sua aplicação. 🚀

É mostrada em sequência uma sugestão de implementação da aplicação.
