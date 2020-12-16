import React from 'react';
import MyContext from './MyContext';
import Grandmother from './Grandmother';

class GreatGranmother extends React.Component {
  constructor(props) {
    super(props);
    this.handleSpendMoney = this.handleSpendMoney.bind(this);
    this.state={
      money: 100000000
    }
  }

  handleSpendMoney() {
    this.setState((prevState) => ({money:prevState.money - 100}))
    
  }

  render() {
    const contextValue = {
      money:this.state.money,
      spendMoney: this.handleSpendMoney,
    }
    return (
      <MyContext.Provider value={contextValue}>
        <div>
          <h1>Eu sou a bisavó</h1>
          {/* <Grandmother money={this.state.money} spendMoney={this.handleSpendMoney}/> */}
          <Grandmother />
        </div>
      </MyContext.Provider>
      
    )  
  }
}

export default GreatGranmother;