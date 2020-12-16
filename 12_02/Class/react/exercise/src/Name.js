import React, { Component } from 'react';

class Name extends Component {
  render() {
    const { value, handleChange } = this.props

    let error = undefined
    if(value.lenght > 120) error="Texto muito grande"

    return (
      <div>
        <label>
          Nome<br/>
          <input 
            name='nome'
            type='text'  
            value={value} 
            onChange={handleChange}   
          />
        </label>
        <span>{ error? error: ''}</span>
      </div>
    )
  }
}

export default Name;
