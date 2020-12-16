import React from 'react';
import Home from './Home';
import About from './About';
import HowTo from './HowTo';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return ( 
    <BrowserRouter>
      <Route path="/about" component={About} />
      <Route path="/howto" component={HowTo} />
      <Route path="/profile/:ship" render= {(props) => <Profile {...props} name ="Barbaruiva, o bucaneiro da rede"/> }/>
      <Route exact path="/" component={Home} />
    </BrowserRouter>
  );
}

export default App;
