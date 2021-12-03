import React, { FC, useCallback, useContext, ChangeEvent } from 'react';
import { PlayerContext } from './PlayerContext';

interface PlayerAudio {
  name: string,
  url: string,
  duration: number,
}

const audioRegExp = /^audio\/.+/;


export const PlayerInput: FC = () => {
    const {setAudioFiles} = useContext(PlayerContext);

    const onFileChange = useCallback(async (event: ChangeEvent<HTMLInputElement> ) => {
      const files = event.target.files as FileList;
      const audioFiles = Array.from(files).filter((file) => {
        return file.type.match(audioRegExp)
      })

      setAudioFiles(await getPlayerAudios(audioFiles));

    }, [setAudioFiles]);


  return <input type="file" multiple={true} onChange={onFileChange} />;
};

function getPlayerAudios(audioFiles: File[]): Promise<PlayerAudio[]> {
  const promises: Promise<PlayerAudio>[] = audioFiles.map(getPlayerAudio);

  return Promise.all(promises);
}

function getPlayerAudio(file: File): Promise<PlayerAudio> {
  const url = URL.createObjectURL(file);

  return getAudioFileDuration(url).then((duration) => ({ name: file.name, url, duration }));
}

function getAudioFileDuration(url: string): Promise<number> {
  return new Promise<number>((resolve) => {
    const audioElement = document.createElement('audio');
    const eventName = 'durationchange';

    const callback = () => {
      resolve(audioElement.duration);

      audioElement.removeEventListener(eventName, callback);
      audioElement.src = '';
    };

    audioElement.addEventListener(eventName, callback);
    audioElement.src = url;
  });
}

