# Gerenciador de pacotes
Vamos lá, esse é um momento importante! Agora você vai iniciar a sua jornada através da tecnologia, que, certamente, vai te apresentar para o mercado.

Aperte o cinto e dedique 100% do seu foco para aprender React de maneira hardcore. Você certamente não vai se arrepender!

Antes de tudo, veremos sobre o gerenciador de pacotes que utilizaremos durante o curso, que é o npm.

A primeira coisa a se saber é que npm é o gerenciador de pacotes em si, ou seja, ele é quem será utilizado para instalar os pacotes em nossas aplicações React, enquanto o npx executa o comando de um pacote sem instalá-lo em si.

Como o create-react-app é um pacote que a única coisa que faz é criar todos os arquivos necessários para termos um app React, não rodamos ele mais de uma vez por projeto, nem precisamos do pacote instalado em nossas máquinas, por isso SEMPRE executamos ele com o npx e não com o npm.

Antes de iniciarmos o conteúdo vamos testar se temos o npm e o npx funcionando corretamente? Para isso, vamos criar uma pasta, em qualquer lugar, e vamos acessá-la através do terminal. Uma vez que estamos dentro da pasta, no terminal, vamos executar o comando abaixo:

npx create-react-app testando-meu-computador

Caso tenha ocorrido algum erro, vamos instalar o nvm, que é um gerenciador de pacotes para o Node.js. Ele vai resolver todos os problemas de npm e npx de forma quase que mágica. Caso o comando tenha rodado com sucesso, pule essa parte de instalação e siga para a parte Continuando o teste.

# Instalando o nvm
Para instalar o nvm vamos seguir quatro passos (o segundo é muito importante, não deixe de fazer!)

1) Primeiro vamos rodar o comando abaixo no terminal.
Nota: Caso você utilize outro terminal que não seja o bash, troque, no comando, o bash pelo nome do terminal que está utilizando. Por exemplo, se você está usando o zsh, troque bash por zsh.

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash

Para ficar mais evidente vamos ver como rodar o comando no zsh também:

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | zsh

2) Vamos fechar TODAS as abas abertas do terminal. Elas precisam ser fechadas para que o script do passo anterior seja carregado no terminal.

3) Agora vamos abrir novamente o terminal e rodar o comando abaixo. Esse comando retornará a versão do nvm que acabamos de instalar, como o da foto na sequência:

nvm --version

Caso apareça a mensagem listada abaixo, volte ao segundo passo e o faça corretamente, fechando todas as abas de terminal que estiverem abertas.

bash: command not found: nvm 

4) Por fim, após todos os procedimentos bem sucedidos, vamos rodar o último comando:

nvm install node

Antes de seguir para a parte "Continuando o teste", vamos rodar o comando abaixo, o mesmo que tinha dado erro antes, agora ele dará certo e poderemos prosseguir:

npx create-react-app testando-meu-computador

# Continuando o teste
Após o npx terminar de executar, ele nos mostra um mini tutorial, em que teremos uma explicação sobre os principais comandos, como na foto abaixo.

Para finalizarmos os testes, vamos utilizar os comandos que estão sendo sugeridos no final do tutorial (certifique-se de que está dentro da pasta que rodou o comando npx):

$ npm start

Após o npm start terminar de carregar (pode demorar um pouco), ele irá abrir uma aba em seu navegador e você verá algo parecido com o exemplo abaixo, o que significa que tudo está funcionando corretamente.
