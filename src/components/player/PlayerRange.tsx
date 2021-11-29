import React, { ChangeEvent, FC, useCallback, useContext } from 'react';
import './PlayerRange.scss';
import { PlayerContext } from './PlayerContext';

interface Props {
  currentTime: number,
  duration: number,
}

export const PlayerRange: FC<Props> = ({currentTime, duration}) => {
  const { audioElement } = useContext(PlayerContext);

  const onRangeChange = useCallback(({ target }: ChangeEvent<HTMLInputElement>) => {
    if (audioElement) {
      audioElement.currentTime = +target.value;
    }
  }, [audioElement]);

  return (
    <input
      className="PlayerRange"
      type="range"
      value={currentTime}
      min="0"
      max={duration}
      step="0.01"
      onChange={onRangeChange}
      disabled={duration === 0}
    />
  );
};
