import React, { Component } from 'react';
import Name from './component/Name';
import Email from './component/Email';
import CPF from './component/CPF';
import Address from './component/Address';
import City from './component/City';
import State from './component/State';
import Type from './component/Type';
import Resume from './component/Resume';
import Job from './component/Job';
import JobDescription from './component/JobDescription';
import Submit from './component/Submit';
import Clean from './component/Clean';

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
