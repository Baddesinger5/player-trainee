import React, { FC } from 'react';
import './PlayerTimings.scss';
import { usePlayerTimeData } from "./hooks/usePlayerTimeData";

interface Props {
  duration: number,
  currentTime: number,
}

export const PlayerTimings: FC<Props> = ({currentTime, duration}) => {
  const [durationMinutes, durationSeconds] = usePlayerTimeData(duration);
  const [currentMinutes, currentSeconds] = usePlayerTimeData(currentTime);

  return (
    <div className="PlayerTimings">
      <div className="timing">{currentMinutes}:{currentSeconds}</div>
      <div className="timing">{durationMinutes}:{durationSeconds}</div>
    </div>
  )
}
