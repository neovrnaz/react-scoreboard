import React from 'react';
import Stats from './Stats';

const Header = (props) => {
  // When using an arrow function, there's an implicit return
  return (
    <header>
      <Stats players={props.players} />
      <h1>{props.title}</h1>
      <span className="stats">Players: {props.totalPlayers}</span>
    </header>
  );
};
export default Header;
