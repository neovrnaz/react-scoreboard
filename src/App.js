// At it's simplest, React is a library for creating and updating HTML elements

// Instead of just importing react and extend the App class from React.Component
// import React from 'react';
import './index.css';

// You can use a named import
import React, { Component } from 'react';
import Header from './components/Header';
import Player from './components/Player';

/*
React applications usually have a top level component that
wraps the entire application
*/

// Renders the player component
// Owns and maintains that player state
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [
        {
          name: 'George',
          // A key is a way to quickly and reliably identify an element in the list
          // You should pass a key prop any time that you're iterating over an array
          id: 1,
        },
        {
          name: 'Theodore',
          id: 2,
        },
        {
          name: 'Giles',
          id: 3,
        },
        {
          name: 'Norman',
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
