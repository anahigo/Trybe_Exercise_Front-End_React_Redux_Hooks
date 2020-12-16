import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerUser } from '../actions';

class Register extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      name: '',
      age: '',
      email: '',
    }
  }

  handleChange({target}) {
    this.setState({ [target.name]: target.value});
  }

  render() {
    const { name, age, email } = this.state;
    const { users } = this.props;
    return (
      <div>
        REGISTER
        <form>
          <label>
            name:
            <input type="text" name="name" value={name} onChange={this.handleChange}/>
          </label>
          <label>
            age:
            <input type="text" name="age" value={age} onChange={this.handleChange}/>
          </label>
          <label>
            email:
            <input type="text" name="email" value={email} onChange={this.handleChange} />
          </label>
          <button onClick={() => users(this.state)}><Link to="/users">Submit</Link></button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  users: (user) => dispatch(registerUser(user))
});

export default connect(null, mapDispatchToProps)(Register);
