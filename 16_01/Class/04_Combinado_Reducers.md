# Combinando Reducers
Como podemos notar, o Redux auxilia bastante o desenvolvimento do nosso projeto, especialmente quando a aplicação se torna muito complexa.

Imagine que a sua aplicação tenha dezenas de componentes e actions diferentes com lógicas específicas e complicadas. Agora suponha que você precise organizar tudo isso em vários reducers, e pior, depois ainda precise passar todos os reducers para um único store! 

O problema que você pode já ter notado é justamente esse, como poderíamos unir vários reducers numa aplicação que, normalmente, possui apenas um store?

O Redux já possui uma função para resolver isso, a combineReducers(). Essa função recebe um objeto como parâmetro contendo cada um dos seus reducers como elementos, por exemplo:

// Arquivo index.js
import { combineReducers } from 'redux';
import meuReducer from './meuReducer';
import meuOutroReducer from './meuOutroReducer';

const reducerCombinado = () => combineReducers({
  meuReducer,
  meuOutroReducer});

export default reducerCombinado;
Agora basta fazer a sua importação no seu store para a mágica acontecer!
Copiar

import { createStore } from 'redux';

// Importando o reducer combinado que fizemos logo acima
import reducerCombinado from './reducers/index';

const store = createStore(reducerCombinado);
...

Você pode conferir uma explicação mais detalhada neste, tópico da documentação sobre a combinação de múltiplos reducers. Guarde para ler depois! (https://redux.js.org/api/combinereducers/)


# Artigo Externo - combineReducers(reducers)#
Conforme seu aplicativo fica mais complexo, você desejará dividir sua função de redução em funções separadas, cada uma gerenciando partes independentes do estado .

A função combineReducers auxiliar transforma um objeto cujos valores são diferentes funções de redução em uma única função de redução que você pode passar createStore.

O redutor resultante chama todos os redutores filho e reúne seus resultados em um único objeto de estado. O estado produzido por combineReducers() namespaces os estados de cada redutor em suas chaves, conforme passado para combineReducers().

Exemplo:
rootReducer = combineReducers ( { potato : potatoReducer , tomato : tomatoReducer } ) 
// Isso produziria o seguinte objeto de estado
{
  batata : { 
    // ... batatas e outro estado gerenciado pelo potatoReducer ...
  } ,
  tomate : { 
    // ... tomates e outro estado administrado pelo redutor de tomate, talvez um bom molho? ...
  }
}

Você pode controlar os nomes das chaves de estado usando chaves diferentes para os redutores no objeto passado. Por exemplo, você pode exigir combineReducers({ todos: myTodosReducer, counter: myCounterReducer }) que a forma do estado seja { todos, counter }.

Uma convenção popular é para citar redutores após o estado corta eles conseguem, assim você pode usar ES6 notação propriedade estenográfica: combineReducers({ counter, todos }). Isso é equivalente a escrever combineReducers({ counter: counter, todos: todos }).

Uma nota para usuários do Flux #
Esta função ajuda a organizar seus redutores para gerenciar suas próprias fatias de estado, da mesma forma que você teria diferentes Flux Stores para gerenciar diferentes estados. Com o Redux, é apenas uma loja, mas combineReducers ajuda a manter a mesma divisão lógica entre os redutores.

Argumentos #
1 - reducers( Objeto ): Um objeto cujos valores correspondem a diferentes funções de redução que precisam ser combinadas em uma. Veja as notas abaixo para algumas regras que todo redutor aprovado deve seguir.

A documentação anterior sugeria o uso da import * as sintaxe ES6 reducers para obter o objeto redutores. Essa foi a fonte de muita confusão, por isso recomendamos exportar um único redutor obtido usando combineReducers() em vez disso reducers/index.js . Um exemplo está incluído abaixo.

Retorna #
( Função ): Um redutor que invoca todos os redutores dentro do objeto reducers e constrói um objeto de estado com a mesma forma.

Notas #
Essa função tem uma opinião moderada e visa ajudar os iniciantes a evitar armadilhas comuns. É por isso que ele tenta impor algumas regras que você não precisa seguir se escrever o redutor de raiz manualmente.

Qualquer redutor passado combineReducers deve satisfazer estas regras:

- Para qualquer ação que não seja reconhecida, ela deve retornar o dado state  a ela como o primeiro argumento.

- Nunca deve retornar undefined. É muito fácil fazer isso por engano por meio de uma declaração return  anterior, então, combineReducers se você fizer isso, será descartado em vez de deixar o erro se manifestar em outro lugar.

- Se o dado state a ele for undefined, ele deve retornar o estado inicial para este redutor específico. De acordo com a regra anterior, o estado inicial também não deve ser undefined. É útil especificá-lo com a sintaxe de argumentos opcionais do ES6, mas você também pode verificar explicitamente o primeiro argumento como sendo undefined.

Ao tentar combineReducers verificar se seus redutores estão em conformidade com algumas dessas regras, você deve se lembrar delas e fazer o possível para segui-las. combineReducers irá verificar seus redutores passando undefined para eles; isso é feito mesmo se você especificar o estado inicial para Redux.createStore(combineReducers(...), initialState). Portanto, você deve garantir que seus redutores funcionem corretamente ao receber undefined como estado, mesmo que nunca pretenda que eles recebam realmente undefined em seu próprio código.

Exemplo: 
reducers/todos.js#

export default function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text])
    default:
      return state
  }
}

reducers/counter.js#

export default function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

reducers/index.js#
import { combineReducers } from 'redux'
import todos from './todos'
import counter from './counter'

export default combineReducers({
  todos,
  counter
})

App.js#

import { createStore } from 'redux'
import reducer from './reducers/index'

const store = createStore(reducer)
console.log(store.getState())
// {
//   counter: 0,
//   todos: []
// }

store.dispatch({
  type: 'ADD_TODO',
  text: 'Use Redux'
})
console.log(store.getState())
// {
//   counter: 0,
//   todos: [ 'Use Redux' ]
// }

Dicas #
Este ajudante é apenas uma conveniência! Você pode escrever o seu próprio combineReducers que funcione de forma diferente , ou até mesmo montar o objeto de estado dos redutores filhos manualmente e escrever uma função de redução de raiz explicitamente, como você escreveria qualquer outra função.

Você pode ligar combineReducers em qualquer nível da hierarquia do redutor. Isso não precisa acontecer no topo. Na verdade, você pode usá-lo novamente para dividir os redutores de filhos que se tornam muito complicados em netos independentes e assim por diante.