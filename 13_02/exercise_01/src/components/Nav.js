import React, { Component } from 'react';
import { Link }  from 'react-router-dom';
import { Pokedex_Logo } from '../images';

class Nav extends Component {
  render() {
    return(
      <div>
        <img src={Pokedex_Logo} alt='pokedex-logo' />
        <div className='nav'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/favorites'>Favorite Pokémons</Link>
        </div>
      </div>
    )
  }
}

export default Nav; 