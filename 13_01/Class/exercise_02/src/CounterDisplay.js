import React from 'react';

class CounterDisplay extends React.Component {
  constructor() {
    super()
      this.state = {
        value: 0
      }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.value > 12 & nextProps.value < 16) return false;
    return true;
  }

  render() {
    return <div> counter: {this.props.value}</div>;
  }
}

export default CounterDisplay;
