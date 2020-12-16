# Array: eu atualizo ou faço uma cópia?
- Video Trybe 

Para utilizar o Redux com mais tranquilidade, devemos sempre nos lembrar de que o state é imutável. Isso significa que só podemos usar métodos que façam clonagem e não podemos usar métodos que façam mutação. Mas vá com calma, esse é um conceito um pouco mais abstrato e poderá levar um tempo para que você o domine, mas dominar esse conceito vai lhe dar muito mais segurança na hora de manipular a store.

No JavaScript há vários métodos para trabalhar com arrays. Podemos dividi-los entre os métodos que, ao realizar a sua função, não criam um novo array, ou seja, causam mutação no array já existente, e os que criam um novo array, sem alterar o array antigo, ou seja, fazem clonagem.

Sabendo disso, e tendo a regra clara de que a Store deve ser imutável, só podemos trabalhar com métodos que façam clonagem e nunca com os métodos que fazem mutação. Em resumo, a mutação atualiza um valor já existente na memória e a clonagem cria um novo valor separado, mantendo o antigo intacto.

Agora, vamos a um exemplo prático do que é mutação:

const itemPrimario = [1, 2, 3, 4, 5];
let mutacaoTeste = itemPrimario;
mutacaoTeste.push(6);
console.log(mutacaoTeste); // [1, 2, 3, 4, 5, 6]
console.log(itemPrimario); // [1, 2, 3, 4, 5, 6]

- Ao passar o valor da const itemPrimario para a const mutacaoTeste, você está apenas dando a variável mutacaoTeste o apontador para o local em memória onde o valor de itemPrimario está localizado. Logo, você tem o mesmo valor apontado por pelas duas variáveis.

- Ao utilizar o push para colocar o valor 6, como o método não faz clonagem, e sim mutação, ele alterou diretamente o local em memória que o valor estava guardado e, por isso, o valor das duas variáveis foi alterado. Isso não é permitido no Redux.

- Exatamente pelo fato do endereço em memória ser alterado diretamente, não tivemos a necessidade de passar o valor para a variável mutacaoTeste novamente, já que o endereço em memória permanece o mesmo.

Agora um exemplo de cópia, num primeiro momento essa resposta parece errada, então rode esse código linha a linha e veja o que acontece por si mesmo:

const itemPrimario = [1, 2, 3, 4, 5];
let clonagemTeste = itemPrimario;
clonagemTeste.concat(6);
console.log(clonagemTeste); // [1, 2, 3, 4, 5]
console.log(itemPrimario); // [1, 2, 3, 4, 5]

- Aqui estamos utilizando o método concat porque esse método faz clonagem. Isto é, ele cria um novo array com os valores atualizados MAS NÃO atualiza a variável clonagemTeste para que ela aponte para esse novo array. Logo, a variável clonagemTeste ainda aponta para o array antigo! Sem uma reatribuição, o endereço atribuído a clonagemTeste é o do valor antigo e por isso seu array não foi alterado. Ficou claro? A mutação altera o valor para onde as duas variáveis apontam e a clonagem cria um novo valor e mantém o antigo intacto.

- Refaça o código com a reatribuição agora, e veja que itemPrimario vai manter seu valor antigo e clonagemTeste irá ter o valor novo.

- Talvez você não tenha se dado conta até agora, mas pense em todas as vezes que você precisou utilizar um push, um splice, um sort()... Esses métodos tem algo em comum, você não precisou reatribuir a variável com o novo valor depois, não é mesmo? Isso acontece porque esses valores fazem mutação. Já métodos como o concat, o slice, um filter()... Esses métodos todos precisam que a variável seja reatribuída, certo? Porque eles fazem clonagem e por conta disso, o novo valor deve ser atribuído, do contrário a variável ainda vai acessar o valor antigo.

- Sempre que estiver na dúvida se pode ou não utilizar um método faça esse teste, ou pesquise sobre o método e veja se ele faz mutação ou clonagem. Para ajudar nessa tarefa, veja esse site que mantém uma lista dos métodos que fazem mutação e dos que não fazem.

Temos esse conteúdo no começo de um dia mais voltado para exercícios, porque ele é importante para evitar algumas armadilhas na hora de criar nosso state. Os próximos exercícios vão necessitar que o conceito seja bem compreendido para serem resolvidos com tranquilidade.

Mais uma vez, esse conteúdo é um pouco mais abstrato, então fique tranquilo caso você tenha dificuldades de entendimento, conforme você for fazendo exercícios, isso vai ficando mais claro.

Durante o dia, pense sobre quando vale a pena utilizar o Redux, pois embora seja obrigatório para efeitos de aprendizado usar Redux em todos os exercícios de hoje, vale sempre a reflexão sobre quando é interessante utilizar e quando pode ser melhor utilizar alguma outra tecnologia para controle de estado;