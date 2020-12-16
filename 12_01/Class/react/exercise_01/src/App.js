import React from 'react';

class App extends React.Component {
  constructor () {
    super()
    this.buttonOne = this.buttonOne.bind(this)
    this.buttonTwo = this.buttonTwo.bind(this)
    this.buttonThree = this.buttonThree.bind(this)
  }

  buttonOne() {
    console.log('Button One')
  }

  buttonTwo() {
    console.log('Button Two')
  }

  buttonThree() {
    console.log('Button Three')
  }

  render() {
    return (
      <div>
        <button onClick={this.buttonOne}>Button One</button>
        <button onClick={this.buttonTwo}>Button Two</button>
        <button onClick={this.buttonThree}>Button Three</button>
      </div>
    )
  }
}

export default App;
