import React, { useState } from "react";
import AreYouReady from './image/AreYouReady.jpeg';
import Go from './image/go.jpeg';
import Game from './Game';


const WaitingRoom = ({ person }) => {
    const [showtime, setShowtime] = useState(false);
    const [timer, setTimer] = useState(5)
    const [showGame, setShowGame] = useState(false);

    const handleClick = () => {
        setShowtime(true);
        let count = 5;
        let timerOut = setInterval(() => {
            setTimer(prev => prev - 1);
            count--;
            // console.log(count);
            if (count === 0) {
                //console.log(count);
                clearInterval(timerOut);
                setShowGame(true);
            }
        }, 1000)
    }

    return (
        <div>
            {(showGame) ? <Game person={person} />
                :
                <div className="waitingroom">
                    <span className="waitingroom__span"> Hi {person} !!!</span>
                    <img className="waitingroom__areyouready" src={AreYouReady} />
                    <br />
                    <img className="waiting__go" src={Go} onClick={handleClick} />
                    {(showtime) &&
                        <div className="waitingroom__countdown--div">
                            <span className="waitingroom__timer">00 : 00 : 0{timer} </span>
                        </div>}

                </div>}
        </div>
    )
}

export default WaitingRoom;