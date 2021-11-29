import React, { FC, useContext } from 'react';
import './PlayerList.scss';
import { PlayerContext } from './PlayerContext';
import { PlayerAudioFile } from './PlayerAudioFile';

export const PlayerList: FC = () => {
  const { audioFiles } = useContext(PlayerContext);

  return (
    <ul className="PlayerList">
      {audioFiles.map((audioFile, index) => (
        <PlayerAudioFile audioFile={audioFile} key={index} />
      ))}
    </ul>
  );
};
