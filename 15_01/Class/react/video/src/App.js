import React, { Component } from 'react';
import './App.css';
import { render } from '@testing-library/react';

class App() extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      saveEmail: '',
    }
  }

  changeEmail(value) {
    this.setState ({ email: value });
  }

  changeSaveEmail(value) {
    this.setState({ saveEmail: value, emails: '' });
  }

  render() {
    const { email, saveEmail } = this.state;
    return (
      <div className="App">
        <label htmlFor="id-email">
          Email
          <input
            id="id-email"
            value= { email }
            type="email"
            onChange={ (e) => this.changeEmail(e.target.value) }
          />
        </label>
        <input
            id="enviar"
            type="button"
            data-testid="id-send"
            value= "Enviar"
            onClick={ () => this.changeSaveEmail(email) }
          />
          <input
            id="btn-id"
            type="button"
            value= "Voltar"
            type="email"
          />
          <h2 data-testid="id-email-user">{`Valor: ${saveEmail}`}</h2>
          {/*<h2 data-testid="id-email-user">{`Valor:`}</h2>*/}

      </div>
    );
  }
}

export default App;
