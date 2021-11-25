import { Dispatch, SetStateAction, useCallback, useContext } from "react";
import { PlayerContext } from "../PlayerContext";


export function usePlayerFirstTrack(): [Dispatch<SetStateAction<File | null>>]{

  const {audios, setSelectedAudioFile} = useContext(PlayerContext)

  const setCurrentTrack = useCallback(() => {
    if (audios) {
      setSelectedAudioFile(audios[0]);
    }
  }, [])

  return [setCurrentTrack]
}
