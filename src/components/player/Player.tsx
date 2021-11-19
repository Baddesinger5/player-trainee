import React, {useEffect, useRef, useState} from 'react';
import {ControlsComponent} from "../playerControls/ControlsComponent";
import {TrackTimings} from "../trackTimings/TrackTimings";
import './Player.scss';

export const Player: React.FC = () => {

    const [ourTrack, setOurTrack] = useState<string | undefined>('');
    const [isPlay, setIsPlay] = useState<boolean>(false)
    const [currentTime, setCurrentTime] = useState<number | undefined>(0)

    const uploadMedia = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOurTrack(URL.createObjectURL(e.target.files![0]))
    }

    const playerRefs = useRef<string | undefined | any>(ourTrack);
    const intervalRef = useRef<any>()

    const {duration} = playerRefs.current

    useEffect(() => {
        if (isPlay) {
            playerRefs.current.play()
            startTimer()
        } else {
            clearInterval(intervalRef.current)
            playerRefs.current.pause()
        }
    }, [isPlay])


    const startTimer = (): void => {
        clearInterval(intervalRef.current)

        intervalRef.current = setInterval(() => {
            if (playerRefs.current.ended) {
                setIsPlay(false)
            } else {
                setCurrentTime(playerRefs.current.currentTime)
            }
        }, 1000)
    }

    const onScrub = (value: any) => {
        clearInterval(intervalRef.current)
        playerRefs.current.currentTime = value;
        setCurrentTime(playerRefs.current.currentTime)
    }

    const onScrubEnd = () => {
        if (!isPlay) {
            setIsPlay(false);
        } else {
            setIsPlay(true)
        }
        startTimer();
    }

    const prevTrack = (value: string) => {
        if (value === 'back') {
            playerRefs.current.currentTime = playerRefs.current.currentTime - 10
        }
    }

    const nextTrack = (value: string) => {
        if (value === 'forward') {
            playerRefs.current.currentTime = playerRefs.current.currentTime + 10
        }
    }


    return (
        <div className='player-container' >

            {ourTrack === '' ? <input type="file" onChange={uploadMedia}/> : null}

            <audio src={ourTrack} ref={playerRefs}></audio>

            <TrackTimings duration={duration} currentTime={playerRefs.current.currentTime} />

            <input type="range"
                   className={'input-range'}
                   value={currentTime}
                   min={'0'}
                   max={duration ? duration : `${duration}`}
                   onChange={(e) => onScrub(e.target.value)}
                   onMouseUp={onScrubEnd}
            />

            <ControlsComponent isPlay={isPlay} prevTrack={prevTrack} nextTrack={nextTrack} setIsPlay={setIsPlay}/>


        </div>
    )
}