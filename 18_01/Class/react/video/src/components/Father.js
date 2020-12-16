import React from 'react';
import Daugther from './Daugther';

class Father extends React.Component {
  render() {
    return (
      <div>
        <h3>Eu sou o pai</h3>
        {/* <Daugther money={this.props.money} spendMoney={this.props.spendMoney}/> */}
        <Daugther />
      </div>
      
    )  
  }
}

export default Father;