import React, { Component } from 'react';
import { Pokemon } from '../components';
import pokemons from '../service/data';
import '../style/PokemonDetails.css';

class PokemonDetails extends Component {
  render() {
    const { pokemonId } = this.props.match.params;
    const pokemon = pokemons.find(pokemon => pokemon.id === parseInt(pokemonId));
    return(
      <div className='pokemon-details'>
        <h2>{pokemon.name} Details</h2>
        <Pokemon pokemon={pokemon} link='false' />
        <h2>Summary</h2>
        <p>{pokemon.summary}</p>
        <h2>Game Locations of {pokemon.name}</h2>
        <div className='locations'>
        {pokemon.foundAt.map((eachLocation, index) => <div className='pokemon-locations' key={index}>
          <img src={eachLocation.map} alt='mapa' />
          <p>{eachLocation.location}</p>
        </div>)}
        </div>
        <label>Favorite pokemon?
          <input type='checkbox'/>
        </label>
      </div>
    )
  }
}

export default PokemonDetails; 