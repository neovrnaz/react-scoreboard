import React, { Component } from 'react';

const ScoreboardContext = React.createContext();

export class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [
        {
          name: 'George',
          // A key is a way to quickly and reliably identify an element in the list
          // You should pass a key prop any time that you're iterating over an array
          id: 1,
          score: 0,
        },
        {
          name: 'Theodore',
          id: 2,
          score: 0,
        },
        {
          name: 'Giles',
          id: 3,
          score: 0,
        },
        {
          name: 'Norman',
          id: 4,
          score: 0,
        },
      ],
    };
  }

  // Player id counter
  prevPlayerId = 4;

  //                     Delta is a variation of a function
  //                      /
  handleScoreChange = (index, delta) => {
    this.setState((prevState) => {
      // New 'players' array – a copy of the previous `players` state
      const updatedPlayers = [...prevState.players];
      // A copy of the player object we're targeting
      const updatedPlayer = { ...updatedPlayers[index] };

      // Update the target player's score
      updatedPlayer.score += delta;
      // Update the 'players' array with the target player's latest score
      updatedPlayers[index] = updatedPlayer;

      // Update the `players` state without mutating the original state
      return {
        players: updatedPlayers,
      };
    });
  };

  handleAddPlayer = (name) => {
    this.setState((prevState) => {
      return {
        players: [
          ...prevState.players,
          {
            name,
            score: 0,
            id: (this.prevPlayerId += 1),
          },
        ],
      };
    });
  };

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

  getHighscore = () => {
    const scores = this.state.players.map((p) => p.score);
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    }
    return null;
  };

  render() {
    return (
      <ScoreboardContext.Provider
        value={{
          players: this.state.players,
          actions: {
            changeScore: this.handleScoreChange,
            removePlayer: this.handleRemovePlayer,
            addPlayer: this.handleAddPlayer,
            highScore: this.getHighscore(),
          },
        }}
      >
        {this.props.children}
      </ScoreboardContext.Provider>
    );
  }
}

export const Consumer = ScoreboardContext.Consumer;
