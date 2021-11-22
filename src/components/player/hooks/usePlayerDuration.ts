import { ChangeEvent, Dispatch, useCallback, useState } from 'react';

export function usePlayerDuration(): [number, Dispatch<ChangeEvent<HTMLAudioElement>>] {
  const [duration, setDuration] = useState<number>(0);
  const onLoadedMetadata = useCallback(({target}: ChangeEvent<HTMLAudioElement>) => setDuration(target.duration), []);

  return [duration, onLoadedMetadata];
}
