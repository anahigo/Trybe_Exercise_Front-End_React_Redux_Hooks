import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Users extends React.Component {
  render() {
    const { users } = this.props;
    return (
      <div>
        USERS
        <br/>
        <ol>
        {!users ? 'Nenhum cliente cadastrado' : users.map((user) => 
        <li>Name:{user.name} Age:{user.age} Email:{user.email}</li>)}
        </ol>
        <br/>
        <button onClick={() => {}}><Link to="/register">Register now</Link></button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.loginReducer.usersData
  }
}

export default connect(mapStateToProps)(Users);