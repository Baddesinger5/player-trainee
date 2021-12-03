import React, { FC, useCallback, useContext } from 'react';
import { ReactComponent as PlayIcon } from '../../icons/play.svg';
import { ReactComponent as PauseIcon } from '../../icons/pause.svg';
import { ReactComponent as BackwardIcon } from "../../icons/backward.svg";
import { ReactComponent as ForwardIcon } from "../../icons/forward.svg";
import { ReactComponent as PrevIcon } from "../../icons/prev.svg";
import { ReactComponent as NextIcon } from "../../icons/next.svg";

import './PlayerControls.scss';
import { useMediaElementPlaying } from '../../hooks/useMediaElementPlaying';
import { PlayerContext } from './PlayerContext';

export const PlayerControls: FC = () => {
  const { audioElement, setSelectedAudioFile, audioFiles, selectedAudioFile } = useContext(PlayerContext);
  const playing = useMediaElementPlaying(audioElement);

  const moveBackward = useCallback(() => audioElement && (audioElement.currentTime -= 10), [audioElement]);
  const moveForward = useCallback(() => audioElement && (audioElement.currentTime += 10), [audioElement]);

  const onChangePrevTrack = useCallback(() => {
    let value: number | null = selectedAudioFile && audioFiles.indexOf(selectedAudioFile)
    if (value) {
      setSelectedAudioFile(audioFiles[value -= 1]);
    }

  }, [setSelectedAudioFile, selectedAudioFile, audioFiles])

  const onChangeNextTrack = useCallback(() => {
    let value: number | null = selectedAudioFile && audioFiles.indexOf(selectedAudioFile)
    if (value !== audioFiles.length - 1) {
      setSelectedAudioFile(audioFiles[value! += 1])
    }

  }, [setSelectedAudioFile, selectedAudioFile, audioFiles])


  const togglePlaying = useCallback(() => {
    if (audioElement) {
      if (audioElement?.paused) {
        audioElement.play();
      } else {
        audioElement?.pause();
      }
    }
  }, [audioElement]);

  return (
    <div className="PlayerControls">
      <button className="button" onClick={onChangePrevTrack} disabled={!audioElement} >
        <PrevIcon />
      </button>

      <button className="button" onClick={moveBackward} disabled={!audioElement}>
        <BackwardIcon />
      </button>

      <button className="button" onClick={togglePlaying} disabled={!audioElement}>
        {playing ? <PauseIcon /> : <PlayIcon />}
      </button>

      <button className="button" onClick={moveForward} disabled={!audioElement}>
        <ForwardIcon />
      </button>

      <button className="button" onClick={onChangeNextTrack} disabled={!audioElement}>
        <NextIcon />
      </button>
    </div>
  );
};
