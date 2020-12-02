import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './Context';
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
    const { name, id, score, index, isHighScore } = this.props;
    return (
      <div className="player">
        <Consumer>
          {(context) => (
            <span className="player-name">
              <button
                type="button"
                className="remove-player"
                onClick={() => context.actions.removePlayer(id)}
              >
                ✖
              </button>
              <Icon isHighScore={isHighScore} />
              {name}
            </span>
          )}
        </Consumer>
        {/* When a component contains another component, it's called composition */}
        <Counter score={score} index={index} />
      </div>
    );
  }
}

Player.propTypes = {
  name: PropTypes.string,
  score: PropTypes.number,
  index: PropTypes.number,
  isHighScore: PropTypes.bool,
};

Player.defaultProps = {
  name: 'No name',
  score: 0,
  index: 0,
  isHighScore: false,
};

export default Player;
