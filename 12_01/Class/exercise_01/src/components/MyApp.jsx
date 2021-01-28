import React, { Component } from "react";
//import MyLabel from './MyLabel';
import MyButton from './MyButton';

class MyApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      labelText:'',
    }
  }

  setLabelText = (labelText) => {
    this.setState({ labelText });
  }

  render() {
    return (
      <div>
        <MyLabel text={this.state.labelText}/>
        <MyButton handleClick={this.setLabelText} label='Botão 1'/><br />
        <MyButton handleClick={this.setLabelText} label='Botão 2'/><br />
        <MyButton handleClick={this.setLabelText} label='Botão 3'/><br />
      </div>
    )
  }
}

export default MyApp


