import React, { Component } from 'react';

class InputInfo extends Component {
  render() {
    const { value, handleToUpper, handleChange, handleCity, verifyCity } = this.props;

    return (
      <label>
        Nome:
        <br />
        <input 
          name='name'
          type='text'
          placeholder='Nome completo'
          maxLength="40"
          required  
          value={value} 
          onChange={handleToUpper}   
        />
      </label>
      <label>
        Email:
        <br />
        <input 
          name='email'
          type='text'
          placeholder='Email mais usado' 
          maxLength="50"
          pattern="^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$"
          required  
          value={value} 
          onChange={handleChange}   
        />
      </label>
      <label>
        CPF:
        <br />
        <input 
          name='cpf'
          type='text'  
          value={value} 
          placeholder='Ex: 00000000000' 
          maxLength="11"
          required 
          onChange={handleChange}   
        />
      </label>
      <label>
        Endereço:
        <br />
        <input 
          name="adress"
          type="text" 
          placeholder='Ex: Rua, Travessa, Av.' 
          maxlength='200' 
          pattern="^([a-zA-Z]|[0-9]|[ ])+$"
          required
          value={value}
          onChange={handleChange} 
        />
      </label>
      <label>
        Cidade:
        <br />
        <input 
          name="city"
          type="text" 
          placeholder='Cidade onde mora' 
          maxlength='28' 
          required
          value={value}
          onChange={handleCity}
          onBlur={verifyCity} 
        />
      </label>
      <label>
        Estado:
        <select
          name="State"
          required
        >
          {data.map((e, i) => 
            (<option key={i}>{e}</option>)
          )}
        </select>
      </label>
      <p>
        Tipo de Residência:
        <label for='casa'>
          Casa
          <input 
            type='radio' 
            id='casa' 
            required
            value={value}
            onChange={handleChange}
          />
        </label>
        <label for='apt'>
          Apartamento
          <input 
            type='radio' 
            id='apt' 
            required
            value={value}
            onChange={handleChange}
          />
        </label>
      </p>
    );
  }
}

export default InputInfo;
