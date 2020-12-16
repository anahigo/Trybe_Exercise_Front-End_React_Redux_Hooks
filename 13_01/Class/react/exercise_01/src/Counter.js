import React from 'react';

class Counter extends React.Component {
  constructor() {
    super()
      this.state = {
        value: 0
      }
  }
  componentDidMount() {
    this.setState({
      counter: 10,
    })
  }

  render() {
    console.log("render");
    return (
      <div>
        <p>Contador</p>
        <button
          onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}
        >
          Soma
        </button>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}

export default Counter;

  