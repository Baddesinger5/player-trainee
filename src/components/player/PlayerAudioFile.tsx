import React, { FC, useCallback, useContext, useEffect } from 'react';
import { ReactComponent as PlayIcon } from '../../icons/play.svg';
import {ReactComponent as PauseIcon} from '../../icons/pause.svg';
import './PlayerAudioFile.scss';
import { PlayerContext } from './PlayerContext';
import { useMediaElementPlaying } from '../../hooks/useMediaElementPlaying';
import { usePlayerAudioFileData } from './hooks/usePlayerAudioFileData';
import { usePlayerTimeData } from './hooks/usePlayerTimeData';

interface Props {
  audioFile: File,
}

export const PlayerAudioFile: FC<Props> = ({ audioFile }) => {
  const {audioElement, setSelectedAudioFile, selectedAudioFile} = useContext(PlayerContext);
  const playing = useMediaElementPlaying(audioElement);
  const audioFileDuration = usePlayerAudioFileData(audioFile);
  const [durationMinutes, durationSeconds] = usePlayerTimeData(audioFileDuration)

  const playTrackFromList = useCallback(() => {
    setSelectedAudioFile(audioFile)
  }, [setSelectedAudioFile, audioFile])

  useEffect(() => {
    playing ? audioElement?.play() : audioElement?.pause()
  }, [selectedAudioFile, audioElement, playing])

  return (
      <button className='PlayerAudioFile' onClick={playTrackFromList}>
        <div>{playing && audioFile === selectedAudioFile ? <PauseIcon /> : <PlayIcon /> }</div>

        <div className='name'>{audioFile.name}</div>

        <div>{durationMinutes}:{durationSeconds}</div>
      </button>
  );
};
