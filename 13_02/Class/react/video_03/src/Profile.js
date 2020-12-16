import React, { Component } from 'react';

class Profile extends Component {
  render() {
    const {ship} = this.props.match.params
    return (
      <div>
        <h1><strong>Meu perfil: {this.props.name}, do navio {ship}</strong></h1>
      </div>
    )
  }
}

export default Profile;

