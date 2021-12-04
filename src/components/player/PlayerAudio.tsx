import React, { AudioHTMLAttributes, FC, useContext } from 'react';
import { PlayerContext } from './PlayerContext';

export const PlayerAudio: FC<AudioHTMLAttributes<HTMLAudioElement>> = () => {
  const { setAudioElement, selectedAudioFile } = useContext(PlayerContext);

  return <audio src={selectedAudioFile?.url ? selectedAudioFile.url : undefined} ref={setAudioElement} autoPlay={true} />;
};
