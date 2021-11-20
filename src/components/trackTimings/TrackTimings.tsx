import React from 'react';
import './TrackTimings.scss';

type trackTimingsTypes = {
    duration: number,
    currentTime: number,
}


export const TrackTimings: React.FC<trackTimingsTypes> = ({duration, currentTime}) => {



    // if (duration === undefined) {
    //     return null
    // }

    if (isNaN(duration)) {
        return null
    }


    const allTrackMinutes = Math.floor(duration / 60);
    const allTrackSeconds = duration - allTrackMinutes * 60;

    const currentMinutes = Math.floor(currentTime / 60);
    const currentSeconds = currentTime - currentMinutes * 60;


    return (
        <div className={'timings'}>
            <p>{currentMinutes < 10 ? '0' + currentMinutes : currentMinutes}:
                {currentSeconds < 10 ? '0' + currentSeconds.toFixed(0) : + currentSeconds.toFixed(0)}
            </p>

            <p>{allTrackMinutes < 10 ? '0' + allTrackMinutes : allTrackMinutes}:
                {allTrackSeconds < 10 ? '0' + allTrackSeconds.toFixed(0) : allTrackSeconds.toFixed(0)}
            </p>
        </div>
    )
}
