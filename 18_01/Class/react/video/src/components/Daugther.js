import React from 'react';
import MyContext from './MyContext';

class Daugther extends React.Component {
  render() {
    return (
      <div>
        <h4>Eu sou a filha</h4>
        <MyContext.Consumer>
          {
            // value => console.log(value)
            value => (
              <div>
                <p>{ `Eu tenho ${value.money} para gastar`}</p>
                <button onClick={value.spendMoney}>Pedir um ifood </button>
              </div>
            )
          }
        </MyContext.Consumer>
        {/* <p>{ `Eu tenho ${this.props.money} para gastar`}</p>
        <button onClick={this.props.spendMoney}>Pedir um ifood </button> */}
      </div>
      
    )  
  }
}

export default Daugther;