import { MouseEventHandler, useCallback, useState } from 'react';


export function usePopupToggler(): [boolean, MouseEventHandler<HTMLButtonElement>] {
  const [toggle, setToggle] = useState<boolean>(false);

  const onToggleHandler = useCallback(() => {
    setToggle(prev => !prev)
  }, [])

  return [toggle, onToggleHandler]
}
