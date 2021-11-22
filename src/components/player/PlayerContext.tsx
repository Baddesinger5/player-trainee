import { createContext, Dispatch, SetStateAction, useMemo, useState } from 'react';

export interface PlayerContextValue {
  audioElement: HTMLAudioElement | null;
  setAudioElement: Dispatch<SetStateAction<HTMLAudioElement | null>>;
}

export const PlayerContext = createContext<PlayerContextValue>({
  audioElement: null,
  setAudioElement() {},
});

export function usePlayerContext(): PlayerContextValue {
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);

  return useMemo(() => ({ audioElement, setAudioElement }), [audioElement, setAudioElement]);
}
