import { ChangeEvent, Dispatch, useCallback, useState } from 'react';

export function usePlayerAudioFilesUrl(): [File[] | null , Dispatch<ChangeEvent<HTMLInputElement>>] {

  const [audioFilesUrl, setAudioFileUrl] = useState<File[] | null>(null);

  const onFileChange = useCallback(({target}: ChangeEvent<HTMLInputElement>) => {
    if (target.files) {
      const file = target.files
      const arrayFromObj = Array.from(file);

      if (file) {
        setAudioFileUrl(arrayFromObj.filter((item) => {
          return item.type === 'audio/mpeg'
        }))
      }

    }
  }, []);

  return [audioFilesUrl, onFileChange];
}
