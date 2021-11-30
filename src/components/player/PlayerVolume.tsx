import { ChangeEvent, FC, useCallback, useContext } from 'react';
import { PlayerContext } from './PlayerContext';

export const PlayerVolume: FC = () => {
  const {audioElement} = useContext(PlayerContext)

  const onRangeChangeVolume = useCallback(({target}: ChangeEvent<HTMLInputElement>) => {
    if (audioElement) {
      audioElement.volume = +target.value;
    }
  }, [audioElement])


  return (
    <>
      <h3>Volume: </h3>
      <input
        type='range'
        min='0'
        max='1'
        step='0.05'
        onChange={onRangeChangeVolume}
        defaultValue='1'
      />
    </>

  )
}
