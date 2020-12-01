import React from 'react';
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
const Counter = ({ index, score, changeScore }) => {
  // Arrow functions are automatically bound to the scope in
  // which they are defined

  return (
    <div className="counter">
      <button
        type="button"
        className="counter-action decrement"
        onClick={() => changeScore(index, -1)}
      >
        -
      </button>
      {/* In order to access this.props in a class, you have to use the `this` keyword */}
      <span className="counter-score">{score}</span>
      <button
        type="button"
        className="counter-action increment"
        onClick={() => changeScore(index, +1)}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
