import React from 'react';
// At it's simplest, React is a library for creating and updating HTML elements

/*
 * In React, your entire UI is a composition of functions.
 * You create a React component with either a function or a class.
 * The easiest way to define a component is to write a function.
 * React components are required to begin with an uppercase letter.
 */

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
      <Counter totalScore={props.score} />
    </div>
  );
};

/*
 * The two ways to create a component is by creating a class or function
 * In classes, props are not accessed through props
 *
 * If a component is only receiving input through props and rendering UI,
 * use a function. When you want to add state, then you use a class component
 */
class Counter extends React.Component {
  constructor() {
    super();
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

/*
React applications usually have a top level component that
wraps the entire application
*/

// Renders the player component
// Owns and maintains that player state
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: [
        {
          name: "George",
          // A key is a way to quickly and reliably identify an element in the list
          // You should pass a key prop any time that you're iterating over an array
          id: 1,
        },
        {
          name: "Theodore",
          id: 2,
        },
        {
          name: "Giles",
          id: 3,
        },
        {
          name: "Norman",
          id: 4,
        },
      ],
    };
  }

  handleRemovePlayer = (id) => {
    this.setState((prevState) => {
      return {
        //          The first item in the callback represents the current item being processed in the array
        //                                 /
        players: prevState.players.filter((p) => p.id !== id),
        //                                                                |
        //           Return all player objects and state (except for the one we want to remove)
      };
    });
  };

  render() {
    return (
      <div className="scoreboard">
        {/* Question: How is totalPlayers going to dynamically change? */}
        <Header title="Scoreboard" totalPlayers={this.state.players.length} />
        {this.state.players.map((player) => (
          <Player
            name={player.name}
            id={player.id}
            key={player.id.toString()}
            removePlayer={this.handleRemovePlayer}
          />
        ))}
      </div>
    );
  }
}

export default App;
