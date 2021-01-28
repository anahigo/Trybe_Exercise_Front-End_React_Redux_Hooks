import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GameCell from './GameCell';
import '../style/GameBoard.css';

class GameBoard extends Component {
  render() {
    const { gameState, updateGame } = this.props;
    return (
      <div className="game-board">
        {gameState.map((playerId, i) => (
          <GameCell
            id={i}
            key={i}
            onClick={() => updateGame(i)}
            content={playerId}
          />
        ))}
      </div>
    );
  }
}

GameBoard.propTypes = {
  gameState: PropTypes.arrayOf(PropTypes.number).isRequired,
  updateGame: PropTypes.func.isRequired,
};

export default GameBoard;