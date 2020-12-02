import React from 'react';
import { Consumer } from './Context';
import Player from './Player';

const PlayerList = () => {
  return (
    <Consumer>
      {({ players, actions }) => (
        <>
          {players.map((player, index) => (
            <Player
              key={player.id.toString()}
              index={index}
              isHighScore={actions.highScore === player.score}
            />
          ))}
        </>
      )}
    </Consumer>
  );
};

export default PlayerList;
