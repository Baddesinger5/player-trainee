import React, { FC } from 'react';
import { PlayerControls } from './PlayerControls';
import { PlayerTimings } from './PlayerTimings';
import './Player.scss';
import { useMediaElementCurrentTime } from '../../hooks/useMediaElementCurrentTime';
import { useMediaElementDuration } from '../../hooks/useMediaElementDuration';
import { PlayerRange } from './PlayerRange';
import { PlayerContext, usePlayerContext } from './PlayerContext';
import { PlayerList } from './PlayerList';
import { PlayerInput } from './PlayerInput';
import { PlayerAudio } from './PlayerAudio';

export const Player: FC = () => {
  const contextValue = usePlayerContext();
  const { audioFiles, audioElement } = contextValue;

  const duration = useMediaElementDuration(audioElement);
  const currentTime = useMediaElementCurrentTime(audioElement);

  return (
    <PlayerContext.Provider value={contextValue}>
      <div className="Player">

        {audioFiles.length ? (<> <PlayerList /> <PlayerAudio /> </>) : <PlayerInput/> }

        <PlayerTimings duration={duration} currentTime={currentTime} />

        <PlayerRange  duration={duration} currentTime={currentTime} />

        <PlayerControls />
      </div>
    </PlayerContext.Provider>
  );
};
