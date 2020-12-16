# Conteúdos
Redux é uma biblioteca que pode ser utilizada com React, Angular, Vue, Ember e JavaScript puro, para dar só alguns exemplos. É muito comum o uso de Redux com React, apesar de serem ferramentas independentes.

Quando você utiliza Redux com algum UI framework (User Interface Framework), é comum usar alguma biblioteca para realizar a conexão (binding) entre o Redux e o framework. No caso do React, a biblioteca React Redux é quem faz essa conexão e pode ser instalada em sua aplicação através do comando:

npm install react-redux

Vamos relembrar alguns conceitos:

# Store
É onde vamos armazenar todos os dados compartilhados da aplicação e é representado por um objeto JavaScript. O State é armazenado no Store do Redux.

# Action
É um objeto JavaScript que representa alguma mudança/alteração que precisa acontecer no State.

# Reducer
É uma função JavaScript que recebe o estado atual (current state) e a ação corrente (current action) e retorna um novo estado (new state). É responsabilidade dessa função decidir o que acontecerá com o estado dada uma ação(action).

# Dispatch
É uma função que envia uma ação (action) para processamento.