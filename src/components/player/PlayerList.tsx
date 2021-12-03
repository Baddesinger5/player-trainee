import React, { FC, useContext, useEffect } from 'react';
import './PlayerList.scss';
import { PlayerContext } from './PlayerContext';
import { PlayerAudioFile } from './PlayerAudioFile';

export const PlayerList: FC = () => {
  const { audioFiles, setSelectedAudioFile } = useContext(PlayerContext);

  useEffect(() => {
    if (audioFiles) {
      setSelectedAudioFile(audioFiles[0])
    }
  }, [])

  return (
    <ul className="PlayerList">
      {audioFiles.map((audioFile, index) => (
        <PlayerAudioFile audioFile={audioFile} key={index} />
      ))}
    </ul>
  );
};
