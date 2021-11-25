import { useEffect, useState } from 'react';

export function useMediaElementPlaying(mediaElement: HTMLMediaElement | null) {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (mediaElement) {
      const playCallback = () => setPlaying(true);
      const pauseCallback = () => setPlaying(false);

      mediaElement.addEventListener('play', playCallback);
      mediaElement.addEventListener('pause', pauseCallback);

      return () => {
        mediaElement.removeEventListener('play', playCallback);
        mediaElement.removeEventListener('pause', pauseCallback);
      };
    }
  }, [mediaElement]);

  return playing;
}
