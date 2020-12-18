import Form from './Form.js';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Form className="Form"/>
    </Provider>
  );
}

export default App;