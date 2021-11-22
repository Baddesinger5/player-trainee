import React from 'react';
import './App.scss';
import { Player } from "./components/player/Player";

export const App: React.FC = () => {
  return (
    <div className="App">
      <Player />
    </div>
  );
}
