import React, { Component } from 'react';
import Name from './Name'
import Age from './Age'


class Form extends Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
    this.fileInput = React.createRef();

    this.state = {
      regiao: '',
      nome: '',
      idade: 0,
      area: '',
      trybe: false
    }
  }

  handleChange({ target }) {
    const { name } = target
    const value  = target.type === 'checkbox' ? target.checked : target.value

    this.setState({
      [name]: value 
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(
      `Selected file - ${this.fileInput.current.files[0].name}`
    );
  }

  render() {
    return (
      <div>
        <h1>Exercício Aula Formulário</h1>
        <form>
          <fieldset>
            <label>
              Qual região você reside?<br/>
              <select 
                name='regiao'
                value={this.state.regiao}
                onChange={this.handleChange}
              >
                <option value='Norte'>Norte</option>
                <option value='Nordeste'>Nordeste</option>
                <option value='Centro-Oeste'>Centro-Oeste</option>
                <option value='Sul'>Sul</option>
                <option value='Sudeste'>Sudeste</option>
              </select>             
            </label><br/><br/>
          
            <Name
              value={this.state.nome} 
              handleChange={this.handleChange}
            /><br/>

            <Age 
              value={this.state.idade} 
              handleChange={this.handleChange}  
            /><br/>

            <label>
              Por que escolheu essa área para estudar?<br/>
              <textarea 
                name='area' 
                value={this.state.area} 
                onChange={this.handleChange}
              />
            </label><br/><br/>

            <label>
              Teste Arquivo<br/>
              <input
                type='file'
                ref={this.fileInput} 
              />
            </label><br/>

          </fieldset>
        </form>
      </div>
    )
  }
}

export default Form;
