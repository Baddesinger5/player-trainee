import { createContext, Dispatch, SetStateAction, useMemo, useState } from 'react';

export interface PlayerAudio {
  name: string;
  url: string;
  duration: number;
}

export interface PlayerContextValue {
  audioElement: HTMLAudioElement | null;
  setAudioElement: Dispatch<SetStateAction<HTMLAudioElement | null>>;
  audioFiles: PlayerAudio[];
  setAudioFiles: Dispatch<SetStateAction<PlayerAudio[]>>;
  selectedAudioFile: PlayerAudio | null;
  setSelectedAudioFile: Dispatch<SetStateAction<PlayerAudio | null>>;
}

export const PlayerContext = createContext<PlayerContextValue>({
  audioElement: null,
  setAudioElement() {},
  audioFiles: [],
  setAudioFiles() {},
  selectedAudioFile: null,
  setSelectedAudioFile() {},
});

export function usePlayerContext(): PlayerContextValue {
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);
  const [audioFiles, setAudioFiles] = useState<PlayerAudio[]>([]);
  const [selectedAudioFile, setSelectedAudioFile] = useState<PlayerAudio | null>(null);

  return useMemo(
    () => ({
      audioElement,
      setAudioElement,
      audioFiles,
      setAudioFiles,
      selectedAudioFile,
      setSelectedAudioFile,
    }),
    [audioElement, setAudioElement, audioFiles, setAudioFiles, selectedAudioFile, setSelectedAudioFile],
  );
}
