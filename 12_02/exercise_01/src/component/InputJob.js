import React, { Component } from 'react'

class InputJob extends Component {
  render() {
    const { handleChange, value, alertInField } = this.props;

    return (
      <label>
        Resumo do currículo:
        <br />
        <input 
          name="resume"
          type="textarea" 
          placeholder='...'
          maxlength="1000"
          required
          value={value}
          onChange={handleChange} 
        />
      </label>
      <label>
        Cargo:
        <br />
        <input 
          name="job"
          type="text"
          maxLength="40"
          required
          placeholder='Último cargo' 
          value={value}
          onChange={handleChange} 
          onMouseEnter={alertInField}
        />
      </label>
      <label>
        Descrição do cargo:
        <br />
        <textarea
          name="jobDescription"
          maxLength="500"
          placeholder='O que você fazia?'
          required
          value={value}
          onChange={handleChange} 
        />
      </label>
    );
  }
}

export default InputJob;
