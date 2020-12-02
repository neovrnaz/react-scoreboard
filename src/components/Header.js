import React from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = () => {
  // When using an arrow function, there's an implicit return
  return (
    <header>
      <Stats />
      <h1>Scoreboard</h1>
      <Stopwatch />
    </header>
  );
};

export default Header;
