import React, { Component } from 'react';
import { Pikachu } from '../images';

class NotFound extends Component {
  render() {
    return(
      <div>
        <h2>PAGE REQUEST NOT FOUND</h2>
        <img src={Pikachu} alt='pikachu' />
      </div>
    )
  }
}

export default NotFound; 