import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props

    return (
      <div className='pokemon'>
        <div>
          <span>{name}</span><br />
          <span>{type}</span><br />
          <span>{`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</span>
        </div>
          <img src={image} alt={`${name} sprite`} />
      </div>
    )
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemon
