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
    const { index, isHighScore } = this.props;
    return (
      <div className="player">
        <Consumer>
          {({ actions, players }) => (
            <span className="player-name">
              <button
                type="button"
                className="remove-player"
                onClick={() => actions.removePlayer(players[index].id)}
              >
                ✖
              </button>
              <Icon isHighScore={isHighScore} />
              {players[index].name}
            </span>
          )}
        </Consumer>
        {/* When a component contains another component, it's called composition */}
        <Counter index={index} />
      </div>
    );
  }
}

Player.propTypes = {
  index: PropTypes.number,
  isHighScore: PropTypes.bool,
};

Player.defaultProps = {
  index: 0,
  isHighScore: false,
};

export default Player;
