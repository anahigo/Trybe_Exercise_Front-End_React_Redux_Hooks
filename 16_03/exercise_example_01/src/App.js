import React from 'react';
import { connect } from 'react-redux';
import { setForms } from './store/actions';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: null,
      email: null,
      preferences: null,
    }
  }
  render() {
    const { username, email } = this.state;
    console.log(this.state)
    console.log(this.state)
    return (
      <div className="Form">
        <label>
          Nome
          <br />
          <input 
            type="text"
            name= "name"
            value={username}
            onChange={(e) => this.setState({username: e.target.value})}
          />
        </label>
        <br />
        <label>
          Email
          <br />
          <input 
            type="text"
            name= "email"
            value={email}
            onChange={(e) => this.setState({email: e.target.value})}
          />
        </label>
        <br />
        <label>
          Biscoito
          <br />
          <input 
            type="radio"
            name= "preferences"
            value="biscoito"
            onChange={(e) => this.setState({preferences: e.target.value})}
          />
        </label>
        <br />
        <label>
          Bolacha
          <br />
          <input 
            type="radio"
            name= "preferences"
            value="bolacha"
            onChange={(e) => this.setState({preferences: e.target.value})}
          />
        </label>
        <br />
        <button 
          type="Button"
          onClick={() => this.props.setForms(this.state)}
        >
        Enviar
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  forms: state
})

const mapDispatchToProps = (dispatch) => ({
  setForms: (data) => dispatch(setForms(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);