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
    this.setState((previousState, _props) => ({
      clickNumbers: previousState.clickNumbers + 1
    }))       
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
