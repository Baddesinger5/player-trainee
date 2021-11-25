import { useMediaElementNumberPropertyValue } from './useMediaElementNumberPropertyValue';

export function useMediaElementDuration(mediaElement: HTMLMediaElement | null): number {
  return useMediaElementNumberPropertyValue(mediaElement, 'durationchange', 'duration');
}
