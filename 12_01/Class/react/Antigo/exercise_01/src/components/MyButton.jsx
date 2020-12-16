import React, { Component } from "react";

class MyButton extends Component {
  render() {
    return (
      <button 
        onClick={() => { this.props.handleClick(this.props.label) }}
      >
        {this.props.label}
      </button>
    )
  }
}

export default MyButton;
