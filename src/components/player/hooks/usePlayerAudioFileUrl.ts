import { ChangeEvent, Dispatch, useCallback, useState } from 'react';

export function usePlayerAudioFileUrl(): [string | null, Dispatch<ChangeEvent<HTMLInputElement>>] {
  const [audioFileUrl, setAudioFileUrl] = useState<string | null>(null);

  const onFileChange = useCallback(({target}: ChangeEvent<HTMLInputElement>) => {
    if (target.files) {
      const file = target.files.item(0);

      if (file) {
        setAudioFileUrl(URL.createObjectURL(file));
      }
    }
  }, []);

  return [audioFileUrl, onFileChange];
}
