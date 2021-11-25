import React, { AudioHTMLAttributes, FC, useContext, useMemo } from 'react';
import { PlayerContext } from './PlayerContext';

export const PlayerAudio: FC<AudioHTMLAttributes<HTMLAudioElement>> = () => {
  const { setAudioElement, selectedAudioFile } = useContext(PlayerContext);

  const audioFileUrl = useMemo(() => selectedAudioFile && URL.createObjectURL(selectedAudioFile), [selectedAudioFile]);

  return <audio src={audioFileUrl ? audioFileUrl : undefined} ref={setAudioElement} autoPlay={true} />;
};
