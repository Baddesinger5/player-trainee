import { useEffect, useState } from 'react';

export function useMediaElementPlaying(audioElement: HTMLMediaElement | null) {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (audioElement) {
      const playCallback = () => setPlaying(true);
      const pauseCallback = () => setPlaying(false);

      audioElement.addEventListener('play', playCallback);
      audioElement.addEventListener('pause', pauseCallback);

      return () => {
        audioElement.removeEventListener('play', playCallback);
        audioElement.removeEventListener('pause', pauseCallback);
      };
    }
  }, [audioElement]);

  return playing;
}
