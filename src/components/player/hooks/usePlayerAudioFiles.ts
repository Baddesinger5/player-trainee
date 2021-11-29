import { ChangeEvent, Dispatch, useCallback, useContext } from 'react';
import { PlayerContext } from '../PlayerContext';

const audioRegExp = /^audio\/.+/;

export function usePlayerAudioFiles(): Dispatch<ChangeEvent<HTMLInputElement>> {
  const { setAudioFiles, setSelectedAudioFile } = useContext(PlayerContext);

  return useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      if (target.files) {
        const files = Array.from(target.files);

        if (files.length) {
          const audioFiles = files.filter(({ type }) => type.match(audioRegExp));
          // const [firstAudioFile] = audioFiles;

          setAudioFiles(audioFiles);

          if (audioFiles[0]) {
            setSelectedAudioFile(audioFiles[0]);
          }
        }
      }
    },
    [setAudioFiles, setSelectedAudioFile],
  );
}
