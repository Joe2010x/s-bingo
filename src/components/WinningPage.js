import React from 'react';
import WinPic from './image/bingo-game-welcome_use.png'
import { Fireworks } from 'fireworks/lib/react'
const WinningPage = ({person}) => {

// setTimeout(() => {
//     let fxProps = {
//         count: 3,
//         interval: 200,
//         colors: ['#cc3333', '#4CAF50', '#81C784'],
//         calc: (props, i) => ({
//           ...props,
//           x: (i + 1) * (window.innerWidth / 3) - (i + 1) * 100,
//           y: 200 + Math.random() * 100 - 50 + (i === 2 ? -80 : 0)
//             })}
// }, 2000);

    return (
        <div>
            <h1>Winner {person}</h1>
            <img className='win__img' src={WinPic} />
        </div>
    )
}

export default WinningPage;