import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state ={
//       todos: []
//     }
//   }


//   addTodo(newTodo) {
//     this.setState((prevState) => ({
//       todos: prevState.todos.concat(newTodo),
//     }));
//   }

//   render() {
//     return (
//       <main>
//         <TodoInput addTodo={this.addTodo} />
//         <TodoList todos={this.state.todos} />
//       </main>
//     );
//   }
// }

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos(todos.concat(newTodo))
  }

  return (
    <main>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} />
    </main>
  );
}

export default App;
