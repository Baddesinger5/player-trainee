import { createContext, Dispatch, SetStateAction, useMemo, useState } from 'react';

export interface PlayerContextValue {
  audioElement: HTMLAudioElement | null;
  setAudioElement: Dispatch<SetStateAction<HTMLAudioElement | null>>;
  audioFiles: File[];
  setAudioFiles: Dispatch<SetStateAction<File[]>>;
  selectedAudioFile: File | null;
  setSelectedAudioFile: Dispatch<SetStateAction<File | null>>;
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
  const [audioFiles, setAudioFiles] = useState<File[]>([]);
  const [selectedAudioFile, setSelectedAudioFile] = useState<File | null>(null);

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
