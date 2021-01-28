import React from 'react';
import PropTypes from 'prop-types'

function Item(props) {
  const { content } = props
  return (
    <div className="Item">
      {content}
    </div>
  );
}

Item.propTypes = {
  content: PropTypes.string.isRequired,
}

export default Item;
