import React, { createContext, Component } from 'react';
import Cars from './Cars'; 
import './App.css';

export const CarsContext = createContext();

class App extends Component {
  constructor() {
    super();
    this.state = {
      red: false,
      blue: false,
      yellow: false,
    }
    this.moveCar = this.moveCar.bind(this)
  }
  
  moveCar(color, side) {
    this.setState({
        [color]: side,
    });
  }

  render() {
    return (
      <CarsContext.Provider value={ { ...this.state, moveCar: this.moveCar } }>
        <Cars />
      </CarsContext.Provider>
    );
  }
};

export default App;