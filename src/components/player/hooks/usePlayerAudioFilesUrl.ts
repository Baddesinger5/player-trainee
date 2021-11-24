import { ChangeEvent, Dispatch, useCallback, useState } from 'react';

export function usePlayerAudioFilesUrl(): [File[] | null , Dispatch<ChangeEvent<HTMLInputElement>>] {

  const [audioFilesUrl, setAudioFileUrl] = useState<File[] | null>(null);

  const onFileChange = useCallback(({target}: ChangeEvent<HTMLInputElement>) => {
    if (target.files) {
      const files = Array.from(target.files);


      if (files.length) {
        setAudioFileUrl(files.filter((item) => {
          return item.type.match('audio.*')
        }))
      }

    }
  }, []);

  return [audioFilesUrl, onFileChange];
}
