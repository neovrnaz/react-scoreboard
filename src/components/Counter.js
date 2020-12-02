import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './Context';

/*
 * In React, your entire UI is a composition of functions.
 * You create a React component with either a function or a class.
 * The easiest way to define a component is to write a function.
 * React components are required to begin with an uppercase letter.
 */

/*
 * The two ways to create a component is by creating a class or function
 * In classes, props are not accessed through props
 *
 * If a component is only receiving input through props and rendering UI,
 * use a function. When you want to add state, then you use a class component
 */

const Counter = ({ index }) => {
  // Arrow functions are automatically bound to the scope in
  // which they are defined

  return (
    <Consumer>
      {({ actions, players }) => (
        <div className="counter">
          <button
            type="button"
            className="counter-action decrement"
            onClick={() => actions.changeScore(index, -1)}
          >
            -
          </button>
          {/* In order to access this.props in a class, you have to use the `this` keyword */}
          <span className="counter-score">{players[index].score}</span>
          <button
            type="button"
            className="counter-action increment"
            onClick={() => actions.changeScore(index, +1)}
          >
            +
          </button>
        </div>
      )}
    </Consumer>
  );
};

Counter.propTypes = {
  index: PropTypes.number,
};

Counter.defaultProps = {
  index: 0,
};

export default Counter;
