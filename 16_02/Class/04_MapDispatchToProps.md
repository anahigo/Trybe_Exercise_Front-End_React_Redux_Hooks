# mapDispatchToProps
A função mapDispatchToProps é a responsável por disparar - fazer o dispatch de - uma ação para o reducer.

Para termos acesso às funcionalidades do Redux, seja a de ler os dados ou manipulá-los, precisamos acessá-las como props de um componente. Por isso, como explícito no nome da função, o mapDispatchToProps mapeia os dispatchs para o props.

Note que no ínicio do arquivo estamos importanto a action addAssignment, criada anteriormente. No caso, estamos nomeando uma propriedade chamada add, que faz o dispatch da action addAssignment com um parâmetro.

O mapDispatchToProps, assim como o mapStateToProps, que veremos logo a frente, podem ser criados via funções convencionais ou arrow functions. O que é indispensável é que o retorno seja um objeto, pois é assim que o Redux o espera.

Lembre-se: a única maneira de enviarmos uma action para um reducer é fazendo seu dispatch.
- Por último, estamos conectando o Redux ao componente. Para isso, precisamos importar o método connect.

# connect
O método connect possui a seguinte estrutura: connect()(). É ele quem nos da acesso ao store do Redux.

No primeiro parênteses, devem estar presentes os métodos nativos do Redux. Como nesse caso estamos apenas enviando dados, estamos passando apenas o mapDispatchToProps. O null presente no connect é necessário pois ele entende que o primeiro parâmetro deve ser uma função chamada mapStateToProps, que veremos logo a frente.

No segundo parênteses passamos nosso componente.

Agora vamos criar o componente List:
import React from 'react';
import { connect } from 'react-redux';

class List extends React.Component {
  render() {
    return (
      <div>
        <div>
          {this.props.list.map(element => (
            <p>{element}</p>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.listReducer});

export default connect(mapStateToProps)(List);

Vamos analisar o que está acontecendo:
- Estamos fazendo um map com os elementos presentes no array list que, por sua vez, está presente no props. Mas como isso foi parar lá?

# mapStateToProps
A função mapStateToProps, auto-descritiva, mapeia as entidades armazenadas nos estados para uma props.

Note que as estruturas dos métodos mapStateToProps e mapDispatchToProps sempre serão as mesmas, o que irá mudar são as propriedades que vamos acessar ou actions que vamos disparar.

No nosso caso, queremos acessar os dados providos pelo reducer listReducer, portanto basta acessar o caminho do state com o reducer desejado e nomear a prop que o receberá (no caso, chamamos de list).

- Por último, conectamos o Redux ao componente, fazendo uso do connect. Como visto anteriormente, o connect tem o seguinte formato: connect()(). Como no caso estamos fazendo apenas leitura dos dados, basta passar a função mapStateToProps no primeiro parênteses e o componente no segundo.

Pronto! Nossa aplicação com react-redux está pronta. Note que a estrutura pura do Redux se baseia em: store, actions e reducers. Já a estrutura de conexão entre o React e o Redux é composta por: provider, connect, dispatch, mapDispatchToProps e mapStateToProps. Essas são as principais ferramentas que constituem a estrutura react-redux.

- Video Trybe