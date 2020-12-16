# Para entendermos melhor
Para facilitar o entendimento do funcionamento das actions, stores e reducers, podemos usar algumas analogias com o nosso dia-a-dia. Voltemos ao exemplo da padaria.

Se o Redux fosse uma padaria, a store seria o forno de assar pão, o reducer seria o padeiro, as actions seriam as responsabilidades do padeiro e o cliente seria a aplicação ou o componente (no caso do React) que precisasse de um serviço.

Para a padaria funcionar bem, é importante que cada pessoa e equipamento tenham suas responsabilidades bem definidas, sendo assim, suponhamos que o cliente queira comprar pão.

Primeiramente ele entra na padaria com a intenção de comprar o pão - isso poderia ser assimilado a uma action - ao requisitar pro padeiro, a intenção é executada.

Logo após o pedido, o padeiro - que na nossa analogia é o reducer - vai até o forno (store) e finalmente retira um pão de lá. Note que agora o estado do forno mudou, ele possui um pão a menos; o pagamento é feito e o fluxo encerra!

Observe que durante todo o processo, cada agente cumpriu seu papel e não houve conflitos no processo! Exatamente para isso que o Redux foi desenvolvido assim, com as partes bem definidas.

Agora vamos fazer três exercícios:
- Criando um Redux store (https://www.freecodecamp.org/learn/front-end-libraries/redux/create-a-redux-store)

- Buscando o estado dentro de um Redux store (https://www.freecodecamp.org/learn/front-end-libraries/redux/get-state-from-the-redux-store)

- Definindo uma Action (https://www.freecodecamp.org/learn/front-end-libraries/redux/define-a-redux-action)
