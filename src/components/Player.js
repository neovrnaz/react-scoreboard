import React, { PureComponent } from 'react';
import Counter from './Counter';

/*
 * Every React component can receive "props", which are a list of attributes
 * used to pass data to a component. e.g. className or Id
 *
 * Note: Props are an object
 */

// Data from state is distributed using props
class Player extends PureComponent {
  render() {
    const { name, id, score, index, removePlayer, changeScore } = this.props;
    return (
      <div className="player">
        <span className="player-name">
          <button type="button" className="remove-player" onClick={() => removePlayer(id)}>
            ✖
          </button>
          {name}
        </span>
        {/* When a component contains another component, it's called composition */}
        <Counter score={score} changeScore={changeScore} index={index} />
      </div>
    );
  }
}

export default Player;
