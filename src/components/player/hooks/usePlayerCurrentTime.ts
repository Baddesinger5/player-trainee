import { ChangeEvent, Dispatch, useCallback, useState } from 'react';

export function usePlayerCurrentTime(): [number, Dispatch<ChangeEvent<HTMLAudioElement>>] {
  const [currentTime, setCurrentTime] = useState<number>(0);
  const onTimeUpdate = useCallback(({target}: ChangeEvent<HTMLAudioElement>) => setCurrentTime(target.currentTime), []);

  return [currentTime, onTimeUpdate];
}
