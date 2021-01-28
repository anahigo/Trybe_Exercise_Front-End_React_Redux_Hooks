import React, { Component } from 'react';

class Age extends Component {
  render() {
    const { value, handleChange } = this.props
  
    let error = undefined
    if(value.lenght > 120) error="Texto muito grande"

    return (
      <div>
        <label>
          Idade<br/>
          <input 
            name='idade' 
            type='number' 
            value={value} 
            onChange={handleChange}  
          />
        </label>
        <span>{ error? error: ''}</span>
      </div>
    )
  }
}

export default Age;
