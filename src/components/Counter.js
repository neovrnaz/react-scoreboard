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
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
    };
  }

  // Arrow functions are automatically bound to the scope in
  // which they are defined
  incrementScore = () => {
    this.setState((prevState) => ({
      score: prevState.score + 1,
    }));
  };

  decrementScore = () => {
    // Adding parentheses creates an implicit return
    this.setState((prevState) => ({
      score: prevState.score - 1,
    }));
  };

  // If either props or state changes, the render method is executed
  render() {
    return (
      <div className="counter">
        <button
          className="counter-action decrement"
          onClick={this.decrementScore}
        >
          -
        </button>
        {/* In order to access props in a class, you have to use the `this` keyword */}
        <span className="counter-score">{this.state.score}</span>
        <button
          className="counter-action increment"
          /* You only want to pass the reference to the function otherwise
           * it will be called as soon as the page has loaded */
          onClick={this.incrementScore}
        >
          +
        </button>
      </div>
    );
  }
}

export default Counter;
