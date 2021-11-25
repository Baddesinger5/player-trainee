import { createContext, Dispatch, SetStateAction, useMemo, useState } from 'react';

export interface PlayerContextValue {
  audioElement: HTMLAudioElement | null;
  setAudioElement: Dispatch<SetStateAction<HTMLAudioElement | null>>;
  audios: File[] | null;
  setAudioList: Dispatch<SetStateAction<File[] | null>>;
  selectedAudioFile: File | null;
  setSelectedAudioFile: Dispatch<SetStateAction<File | null>>
}

export const PlayerContext = createContext<PlayerContextValue>({
  audioElement: null,
  setAudioElement() {},
  audios: null,
  setAudioList() {},
  selectedAudioFile: null,
  setSelectedAudioFile() {},
});

export function usePlayerContext(): PlayerContextValue {
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);
  const [audios, setAudioList ] = useState<File[] | null>(null);
  const [ selectedAudioFile, setSelectedAudioFile ] = useState<File | null>(null)

  return useMemo(() => ({ audioElement, setAudioElement, audios, setAudioList, selectedAudioFile, setSelectedAudioFile  }),
    [audioElement, setAudioElement, audios, setAudioList,  selectedAudioFile, setSelectedAudioFile  ]);
}
