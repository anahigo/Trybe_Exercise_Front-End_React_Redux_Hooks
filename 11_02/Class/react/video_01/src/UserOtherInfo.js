import React, { Component } from 'react'

class UserOtherInfo extends Component {
  render() {
    // return (<span>Outras Informações</span>)

    const { email, id } = this.props

    return (<span>{email} {id}</span>)
  }
}

export default UserOtherInfo