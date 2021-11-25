import React, { FC } from "react";
import { usePlayerAudioFiles } from "./hooks/usePlayerAudioFiles";

export const PlayerInput: FC = () => {
  const [onFileChange] = usePlayerAudioFiles();

  return (
    <input type="file"  multiple={true} onChange={onFileChange} />
  )
}
