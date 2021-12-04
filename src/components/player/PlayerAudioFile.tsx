import React, { FC, useCallback, useContext, useEffect } from 'react';
import { ReactComponent as PlayIcon } from '../../icons/play.svg';
import { ReactComponent as PauseIcon } from '../../icons/pause.svg';
import './PlayerAudioFile.scss';
import { PlayerContext } from './PlayerContext';
import { useMediaElementPlaying } from '../../hooks/useMediaElementPlaying';
import { usePlayerTimeData } from './hooks/usePlayerTimeData';
import { PlayerAudio } from './PlayerInterfaces';

interface Props {
  audioFile: PlayerAudio,
}

export const PlayerAudioFile: FC<Props> = ({ audioFile }) => {
  const { audioElement, setSelectedAudioFile, selectedAudioFile } = useContext(PlayerContext);
  const playing = useMediaElementPlaying(audioElement);
  const [durationMinutes, durationSeconds] = usePlayerTimeData(audioFile.duration);

  const playTrackFromList = useCallback(() => {
    setSelectedAudioFile(audioFile);
  }, [setSelectedAudioFile, audioFile]);

  useEffect(() => {
    playing ? audioElement?.play() : audioElement?.pause();
  }, [selectedAudioFile, audioElement, playing]);

  return (
    <button className="PlayerAudioFile" onClick={playTrackFromList}>
      <div>{playing && selectedAudioFile === audioFile ? <PauseIcon /> : <PlayIcon />}</div>

      <div className="name">{audioFile.name}</div>

      <div>{durationMinutes}:{durationSeconds}</div>
    </button>
  );
};
