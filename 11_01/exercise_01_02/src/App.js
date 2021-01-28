import React from 'react';
import './App.css';


const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const toDoList = ["Estudar", "Praticar", "Descansar", "Comer"];

const App()  {
  return (
    <ul>
      { toDoList.map(toDo => task(toDo)) /* [<li></li>, <li></li>] */}
    </ul>
  );
} 

export default App;