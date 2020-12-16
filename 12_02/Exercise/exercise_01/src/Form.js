import React, { Component } from 'react';
import InputInfo from './InputInfo';
import InputJob from './InputJob';

class Form extends Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: '',
      type: '',
      resume: '',
      job: '',
      jobDescription: '',
    }
  }

  handleChange({ target }) {
    const { name, value } = target

    this.setState({
      [name]: value 
    })
  }

  render() {
    return(
      <div>
        <div>
          <h1>Resumo Currículo</h1>
        </div>
        <div>
          <form>
            <fieldset>
            <legend>
                Dados Pessoais:
              </legend>
              <InputInfo 
                value={this.state.name} 
                handleChange={this.handleToUpper}
                value={this.state.email} 
                handleChange={this.handleChange}
                value={this.state.cpf} 
                handleChange={this.handleChange}
                value={this.state.address} 
                handleChange={this.handleChange}
                value={this.state.city} 
                handleChange={this.handleChange}
                value={this.state.state} 
                handleChange={this.handleChange}
                value={this.state.type} 
                handleChange={this.handleChange}
              />
            </fieldset>
            <fieldset>
              <legend>
                Último emprego:
              </legend>
              <InputJob 
                value={this.state.resume} 
                handleChange={this.handleChange}
                value={this.state.job} 
                handleChange={this.handleChange}
                value={this.state.jobDescription} 
                handleChange={this.handleChange}
              />
            </fieldset>
            <div>
              <button type="submit">Enviar</button>
              <input type="reset" value="Limpar" />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Form;
