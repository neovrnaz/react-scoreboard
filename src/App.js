// At it's simplest, React is a library for creating and updating HTML elements

// Instead of just importing react and extend the App class from React.Component
// import React from 'react';
import './index.css';

// You can use a named import
import React from 'react';
import Header from './components/Header';
import PlayerList from './components/PlayerList';
import AddPlayerForm from './components/AddPlayerForm';

/*
React applications usually have a top level component that
wraps the entire application
*/

// Owns and maintains that player state
const App = () => {
  return (
    <div className="scoreboard">
      {/* Question: How is totalPlayers going to dynamically change? */}
      <Header />
      <PlayerList />
      <AddPlayerForm />
    </div>
  );
};

export default App;
