import { ChangeEvent, Dispatch, useCallback, useContext } from 'react';
import { PlayerContext } from '../PlayerContext';

export function usePlayerAudioFiles(): [Dispatch<ChangeEvent<HTMLInputElement>>] {

  const {setAudioList} = useContext(PlayerContext)

  const onFileChange = useCallback(({target}: ChangeEvent<HTMLInputElement>) => {
    if (target.files) {
      const files = Array.from(target.files);

      if (files.length) {
        setAudioList(files.filter((item) => {
          return item.type.match('^audio/.+')
        }))
      }

    }
  }, []);

  return [onFileChange];
}
