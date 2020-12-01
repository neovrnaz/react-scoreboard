import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import Icon from './Icon';

/*
 * Every React component can receive "props", which are a list of attributes
 * used to pass data to a component. e.g. className or Id
 *
 * Note: Props are an object
 */

// Data from state is distributed using props
class Player extends PureComponent {
  render() {
    const { name, id, score, index, removePlayer, changeScore, isHighScore } = this.props;
    return (
      <div className="player">
        <span className="player-name">
          <button
            type="button"
            className="remove-player"
            onClick={() => removePlayer(id)}
          >
            ✖
          </button>
          <Icon isHighScore={isHighScore} />
          {name}
        </span>
        {/* When a component contains another component, it's called composition */}
        <Counter score={score} changeScore={changeScore} index={index} />
      </div>
    );
  }
}

Player.propTypes = {
  changeScore: PropTypes.func,
  removePlayer: PropTypes.func,
  name: PropTypes.string,
  score: PropTypes.number,
  index: PropTypes.number,
  isHighScore: PropTypes.bool,
};

Player.defaultProps = {
  changeScore: () => {
    console.log("Function doesn't exist");
  },
  removePlayer: () => {
    console.log("Function doesn't exist");
  },
  name: 'No name',
  score: 0,
  index: 0,
  isHighScore: false
};

export default Player;
