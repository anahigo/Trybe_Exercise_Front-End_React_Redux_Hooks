import React, { Component } from 'react'
import pokemons from './data'
import Pokemon from './Pokemon'

class Pokedex extends Component {
  render() {
    return (
      <div className="pokedex">
        {pokemons.map(pokemons => {
          return <Pokemon
            key={pokemons.id}
            name={pokemons.name}
            type={pokemons.type}
            averageWeight={pokemons.averageWeight}
            image={pokemons.image}
          />
        })}
      </div>
    )
  }
}

export default Pokedex;