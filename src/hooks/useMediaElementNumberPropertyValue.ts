import { useEffect, useState } from 'react';

export function useMediaElementNumberPropertyValue(
  mediaElement: HTMLMediaElement | null,
  eventName: keyof GlobalEventHandlersEventMap,
  propertyName: keyof HTMLMediaElement,
  ): number {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (mediaElement) {
      const callback = () => setValue(mediaElement[propertyName] as number);

      mediaElement.addEventListener(eventName, callback);

      return () => {
        mediaElement.removeEventListener(eventName, callback);
      }
    }
  }, [mediaElement, eventName, propertyName]);

  return value;
}
