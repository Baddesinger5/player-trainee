import React, { FC, useContext } from 'react';
import './PlayerList.scss';
import { PlayerContext } from './PlayerContext';

export const PlayerList: FC = () => {
  const { audioFiles } = useContext(PlayerContext);

  return (
    <ul className="PlayerList">
      {audioFiles.map((item, index) => (
        <li className="item" key={index}>
          {item.name}
        </li>
      ))}
    </ul>
  );
};
