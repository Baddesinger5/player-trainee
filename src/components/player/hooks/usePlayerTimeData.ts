import { useMemo } from 'react';

export function usePlayerTimeData(sourceSeconds: number): [string, string] {
  return useMemo(() => {
    const roundedSeconds = Math.floor(sourceSeconds);

    const minutes = Math.floor(roundedSeconds / 60);
    const minutesString = minutes.toString().padStart(2, '0');

    const seconds = roundedSeconds - minutes * 60;
    const secondsString = seconds.toString().padStart(2, '0');

    return [minutesString, secondsString];
  }, [sourceSeconds]);
}
