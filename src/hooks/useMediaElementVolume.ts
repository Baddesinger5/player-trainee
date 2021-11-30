import { useMediaElementNumberPropertyValue } from './useMediaElementNumberPropertyValue';

export function useMediaElementVolume(mediaElement: HTMLMediaElement | null): number {
  return useMediaElementNumberPropertyValue(mediaElement, 'volumechange', 'volume');
}
