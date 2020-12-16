import React, { Component } from 'react'
import './UserName.css'
import PropTypes from 'prop-types'

class UserName extends Component {
  render() {
    // return (<span className='name'>Nome qualquer</span>)
    const name = this.props.name
    return (<span className='name'>{name}</span>)
  }
}

UserName.propTypes = {
  // name: PropTypes.string.isRequired
  name: PropTypes.string
}

UserName.defaultProps = {
  name: 'Stranger'
}

export default UserName