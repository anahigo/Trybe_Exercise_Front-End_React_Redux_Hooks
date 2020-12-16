import React, { createContext, Component } from 'react';
import Cars from './Cars'; 
import './App.css';

export const CarContext = createContext();

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
  
  moveCar(cor, lado) {
    this.setState({
        [cor]: lado,
    });
  }

  render() {
    return (
      <CarContext.Provider value={ { ...this.state, moveCar: this.moveCar } }>
        <Cars />
      </CarContext.Provider>
    );
  }
};

export default App;