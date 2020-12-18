import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/pokemon.css';

class Pokemon extends Component {
  render() {
    const {name, type, averageWeight, image, id} = this.props.pokemon;
    const {link} = this.props; 
    if(link === 'false'){
      return (
        <div className="pokemon">
          <div>
            <p>{name}</p>
            <p>{type}</p>
            <p>
              Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
            </p>
          </div>
          <img src={image} alt={`${name} sprite`} />
        </div>
      );
    }
    return (
      <div className="pokemon">
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
          <Link to={`/pokemons/${id}`}>More details</Link>
        </div>
        <img src={image} alt={`${name} sprite`} />
      </div>
    );
  }
}

export default Pokemon;