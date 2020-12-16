import React from 'react';
import './App.css';
import Table from './Table'

// function App() {
//   return (<span>Minha tabela em React</span>);
// }

function App() {
  return <Table />;
}

export default App;





class Table extends Component {
  render() {
    const users = [
      {
        id: 102,
        name: "João",
        email: "joao@gmail.com",
        avatar: "https:\/\/cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
      },
      {
        id: 77,
        name: "Amélia",
        email: "amelia@gmail.com",
        avatar: "https:\/\/cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
      }
    ];
    
    //return (<span>Minha tabela em React pelo componente</span>)
    return (
      <div>
        <UserName name={joao.name}/> 
        <UserOtherInfo email={joao.email} id={joao.id}/>
      </div>
    )
  }
}