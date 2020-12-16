import React from 'react';

class App extends React.Component {
  constructor () {
    super()
    this.button = this.button.bind(this)
    this.state = {
      clickNumbers: 0
    }
  }

  button() {
    const btt = document.querySelector('button')
    this.setState((previousState, _props) => ({
      clickNumbers: previousState.clickNumbers + 1 
      }), (state) => (console.log(this.state))
    )
    if (this.state.clickNumbers % 2 === 0) {
      btt.style.background = 'green'
    } 
      
  }

  render() {
    return (
      <div>
        <button onClick={this.button}>{this.state.clickNumbers}</button>
      </div>
    )
  }
}

export default App;
