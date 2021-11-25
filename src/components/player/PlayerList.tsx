import React, { FC, useContext } from 'react';
import './PlayerList.scss';
import { PlayerContext } from './PlayerContext';


export const PlayerList: FC = () => {

  const { audios, } = useContext(PlayerContext);

  return (
    <div className="PlayerList">
      {audios && audios?.map((item: File, index: number) => {
        return (
          <div className="audio-item" key={index}>
            {item.name}
          </div>
        )
      })}
    </div>
  )
}
