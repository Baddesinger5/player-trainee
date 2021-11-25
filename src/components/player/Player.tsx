import React, { FC } from 'react';
import { PlayerControls } from './PlayerControls';
import { PlayerTimings } from './PlayerTimings';
import './Player.scss';
import { usePlayerCurrentTime } from './hooks/usePlayerCurrentTime';
import { usePlayerDuration } from './hooks/usePlayerDuration';
import { PlayerRange } from './PlayerRange';
import { PlayerContext, usePlayerContext } from './PlayerContext';
import { PlayerList } from './PlayerList';
import { PlayerInput } from './PlayerInput';

export const Player: FC = () => {
  const contextValue = usePlayerContext();
  const { setAudioElement, audioElement, audios } = contextValue;

  const [duration, onLoadedMetadata] = usePlayerDuration();
  const [currentTime, onTimeUpdate] = usePlayerCurrentTime();

  return (
    <PlayerContext.Provider value={contextValue}>
      <div className="Player">

        <PlayerList />

        {audios ?
          <audio
            // src={audioFileUrl}
            ref={setAudioElement}
            onLoadedMetadata={onLoadedMetadata}
            onTimeUpdate={onTimeUpdate}
            autoPlay={true} /> :
              <PlayerInput />
          }

        <PlayerTimings duration={duration} currentTime={currentTime} />

        <PlayerRange duration={duration} currentTime={currentTime} />

        <PlayerControls />
      </div>
    </PlayerContext.Provider>
  );
};
