import React from 'react';
import Counter from './Counter';

/*
 * Every React component can receive "props", which are a list of attributes
 * used to pass data to a component. e.g. className or Id
 *
 * Note: Props are an object
 */

// Data from state is distributed using props
const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        <button
          className="remove-player"
          onClick={() => props.removePlayer(props.id)}
        >
          ✖
        </button>
        {props.name}
      </span>
      {/* When a component contains another component, it's called composition */}
      <Counter
        score={props.score}
        changeScore={props.changeScore}
        index={props.index}
      />
    </div>
  );
};

export default Player;
