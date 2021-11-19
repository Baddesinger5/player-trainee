import React from 'react';

import {ReactComponent as Play} from "../../icons/play.svg";
import {ReactComponent as Pause} from "../../icons/pause.svg";
import {ReactComponent as Prev} from "../../icons/next.svg";
import {ReactComponent as Next} from "../../icons/next-1.svg";

import './ControlsComponent.scss';

type controlTypes = {
    isPlay: boolean,
    prevTrack(back: string): void,
    nextTrack(forward: string): void,
    setIsPlay(isPlay: boolean): void
}

export const ControlsComponent: React.FC<controlTypes> = ({isPlay, prevTrack, nextTrack, setIsPlay}) => {
    return (
        <div className={'controls'}>
            <button onClick={() => prevTrack('back')} className={'button'}>
                <Prev />
            </button>

            {isPlay ?
                <button type={'button'} onClick={() => setIsPlay(false)} className={'button'}>
                    <Pause />
                </button>
                :
                <button type={'button'} onClick={() => setIsPlay(true)} className={'button'}>
                    <Play />
                </button>
            }

            <button onClick={() => nextTrack('forward')} className={'button'}>
                <Next />
            </button>
        </div>
    )
}
