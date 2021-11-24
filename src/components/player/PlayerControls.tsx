import React, { FC, useCallback, useContext } from 'react';
import { ReactComponent as Play } from '../../icons/play.svg';
import { ReactComponent as Pause } from '../../icons/pause.svg';
import { ReactComponent as Backward } from "../../icons/backward.svg";
import { ReactComponent as Forward } from "../../icons/forward.svg";
import { ReactComponent as Prev } from "../../icons/prev.svg";
import { ReactComponent as Next } from "../../icons/next.svg";

import './PlayerControls.scss';
import { useMediaElementPlaying } from '../../hooks/useMediaElementPlaying';
import { PlayerContext } from './PlayerContext';

export const PlayerControls: FC = () => {
  const { audioElement } = useContext(PlayerContext);
  const moveBackward = useCallback(() => audioElement && (audioElement.currentTime -= 10), [audioElement]);
  const moveForward = useCallback(() => audioElement && (audioElement.currentTime += 10), [audioElement]);
  const togglePlaying = useCallback(() => {
    if (audioElement) {
      if (audioElement?.paused) {
        audioElement.play();
      } else {
        audioElement?.pause();
      }
    }
  }, [audioElement]);
  const playing = useMediaElementPlaying(audioElement);

  return (
    <div className="PlayerControls">
      <button className="button" onClick={moveBackward} disabled={!audioElement}>
        <Prev />
      </button>

      <button className="button">
        <Backward />
      </button>

      <button className="button" onClick={togglePlaying} disabled={!audioElement}>
        {playing ? <Pause /> : <Play />}
      </button>

      <button className="button">
        <Forward />
      </button>

      <button className="button" onClick={moveForward} disabled={!audioElement}>
        <Next />
      </button>
    </div>
  );
};
