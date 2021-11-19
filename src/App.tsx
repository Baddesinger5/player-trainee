import React from 'react';
import './App.scss';
import {Player} from "./components/player/Player";
import 'normalize.css';

const App: React.FC = () => {
  return (
    <div className="App">
        <Player />
    </div>
  );
}

export default App;