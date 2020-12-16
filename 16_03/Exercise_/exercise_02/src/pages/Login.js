import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
      password: '',
    }
  }

  handleChange({target}) {
    this.setState({ [target.name]: target.value});
  }

  render() {
    const { formData } = this.props
    const { email, password } = this.state;
    return (
      <div>
        LOGIN
        <form>
          <label>
            e-mail:
            <input type="text" name="email" value={email} onChange={this.handleChange}/>
          </label>
          <label>
            password:
            <input type="text" name="password" value={password} onChange={this.handleChange}/>
          </label>
          <button onClick={() => formData(this.state)}><Link to="/users">Submit</Link></button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  formData: (user) => dispatch(loginUser(user))
});

export default connect(null, mapDispatchToProps)(Login);