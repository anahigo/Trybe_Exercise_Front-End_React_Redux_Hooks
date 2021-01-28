import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Pokedex, About, Favorites, NotFound, PokemonDetails } from './pages';
import { Nav } from './components';
import pokemons from './service/data';
import './style/App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path='/pokemons/:pokemonId' component={PokemonDetails} />
          <Route path='/favorites' component={Favorites} />
          <Route path='/about' component={About} />
          <Route exact path='/'><Pokedex pokemons={pokemons} /></Route>
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
