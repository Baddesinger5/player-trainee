import { useEffect, useState } from 'react';


export function usePlayerAudioFileData(track: Blob) {
  const [trackDuration, setTrackDuration] = useState(0)

  useEffect(() => {
    const reader = new FileReader();

    reader.onload = function(event: ProgressEvent<FileReader>) {

      const audioContext = new window.AudioContext();
      if (audioContext) {
        audioContext.decodeAudioData(event.target!.result as ArrayBuffer, function(buffer) {
          const duration = buffer.duration;
          setTrackDuration(duration)
        })
      }
    }
    reader.readAsArrayBuffer(track)
  }, [track, trackDuration])

  return trackDuration
}
