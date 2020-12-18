import React, { Component } from 'react';
import { Pokedex } from '../images'

class About extends Component {
  render() {
    return(
      <div>
        <h1>About</h1>
        <p>This application simulates a Pokedex, a digital enciclopedia containing all Pokemons</p>
        <p>One can filter Pokemons by type, and see more details for each one of them</p>
        <br/>
        <img src={Pokedex} alt='pokedex'/>
      </div>
    )
  }
}

export default About;
