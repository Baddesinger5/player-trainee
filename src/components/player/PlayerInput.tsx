import React, { FC } from 'react';
import { usePlayerAudioFiles } from './hooks/usePlayerAudioFiles';

export const PlayerInput: FC = () => {
  const onChange = usePlayerAudioFiles();

  return <input type="file" multiple={true} onChange={onChange} />;
};
