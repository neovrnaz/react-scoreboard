import React from 'react';
import Player from './Player';
import { Consumer } from '.Context';

const PlayerList = ({players, getHighScore, changeScore, removePlayer}) => {
  return (
    <div>
      {players.map((player, index) =>

        <Player
          index={index}
          key={player.id.toString()}
          id={player.id}
          name={player.name}
          score={player.score}
          changeScore={changeScore}
          removePlayer={removePlayer}
          isHighScore={getHighScore() === player.score}
        />
      )}
    </div>
  );
};

export default PlayerList;

