import React, { Component } from 'react';

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
              <Name />
              <Email />
              <CPF />
              <Address />
              <City />
              <State />
              <Type />
            </fieldset>

            <fieldset>
              <Resume/>
              <Job />
              <JobDescription />
            </fieldset>
          </form>

          <div>
            <Submit />
            <Clean />
          </div>

        </div>
      </div>
    )
  }
}

export default Form;
