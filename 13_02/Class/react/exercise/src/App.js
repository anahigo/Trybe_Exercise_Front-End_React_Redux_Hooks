import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Users from './Users';
import { BrowerRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowerRouter>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/users" component={Users} />
      </BrowerRouter>
    );
  }
}

export default App;