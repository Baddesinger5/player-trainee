import React, { FC } from 'react';
import { PlayerControls } from './PlayerControls';
import { PlayerTimings } from './PlayerTimings';
import './Player.scss';
import { usePlayerCurrentTime } from './hooks/usePlayerCurrentTime';
import { usePlayerDuration } from './hooks/usePlayerDuration';
import { usePlayerAudioFileUrl } from './hooks/usePlayerAudioFileUrl';
import { PlayerRange } from './PlayerRange';
import { PlayerContext, usePlayerContext } from './PlayerContext';

export const Player: FC = () => {
  const contextValue = usePlayerContext();
  const { setAudioElement } = contextValue;
  const [audioFileUrl, onFileChange] = usePlayerAudioFileUrl();
  const [duration, onLoadedMetadata] = usePlayerDuration();
  const [currentTime, onTimeUpdate] = usePlayerCurrentTime();

  return (
    <PlayerContext.Provider value={contextValue}>
      <div className="Player">
        {audioFileUrl ?
          <audio
            src={audioFileUrl}
            ref={setAudioElement}
            onLoadedMetadata={onLoadedMetadata}
            onTimeUpdate={onTimeUpdate}
            autoPlay={true} /> :
          <input type="file" onChange={onFileChange} />}

        <PlayerTimings duration={duration} currentTime={currentTime} />

        <PlayerRange duration={duration} currentTime={currentTime} />

        <PlayerControls />
      </div>
    </PlayerContext.Provider>
  );
};
