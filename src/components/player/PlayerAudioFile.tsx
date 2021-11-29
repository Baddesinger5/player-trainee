import React, { FC, useCallback, useContext, useEffect } from 'react';
import { ReactComponent as PlayIcon } from '../../icons/play.svg';
import {ReactComponent as PauseIcon} from '../../icons/pause.svg';
import './PlayerAudioFile.scss';
import { PlayerContext } from './PlayerContext';
import { useMediaElementPlaying } from '../../hooks/useMediaElementPlaying';

interface Props {
  audioFile: File,
}

export const PlayerAudioFile: FC<Props> = ({ audioFile }) => {
  const {audioElement, setSelectedAudioFile, selectedAudioFile} = useContext(PlayerContext);
  const playing = useMediaElementPlaying(audioElement);

  const playTrackFromList = useCallback(() => {
    setSelectedAudioFile(audioFile)
  }, [setSelectedAudioFile, audioFile])

  useEffect(() => {
    playing ? audioElement?.play() : audioElement?.pause()
  }, [selectedAudioFile, audioElement, playing])

  return (
      <button className='PlayerAudioFile' onClick={playTrackFromList}>
        <div>{playing ? <PauseIcon /> : <PlayIcon /> }</div>

        <p className='audio-name'>{audioFile.name}</p>

        <p>00:00</p>
      </button>
  );
};
