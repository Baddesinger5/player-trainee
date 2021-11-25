import { useMediaElementNumberPropertyValue } from './useMediaElementNumberPropertyValue';

export function useMediaElementCurrentTime(mediaElement: HTMLMediaElement | null): number {
  return useMediaElementNumberPropertyValue(mediaElement, 'timeupdate', 'currentTime');
}
