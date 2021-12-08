import { MouseEventHandler, useCallback, useState } from 'react';

export function useToggle(): [boolean, MouseEventHandler<HTMLButtonElement>] {
  const [open, setOpen] = useState<boolean>(false);

  const toggle = useCallback(() => setOpen(prev => !prev), []);

  return [open, toggle];
}
