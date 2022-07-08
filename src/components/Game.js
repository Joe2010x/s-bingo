import React, { useEffect, useState, useRef } from 'react';
import NumberBar from './NumberBar';
import DisplayNumber from './DisplayNumber';
import NumBar from './NumBar';
import Board from './Board';
import BBtn from './image/bingo-button.webp';
import WinningPage from './WinningPage';

const Game = ({ person }) => {
    const [outputArray, setOutputArray] = useState([]);
    const [gridArray, setGridArray] = useState([]);
    const [hasWin, setHasWin] = useState(false);
    const numberCount = useRef();

    const randomNumber = (startNum, endNum) => {
        let numberList = [];
        for (let i = startNum; i <= endNum; i++) {
            numberList = numberList.concat(i);
        }
        let result = [];
        for (let i = startNum; i <= endNum; i++) {
            let newNum;
            newNum = Math.floor(Math.random() * (endNum - i + 1));
            console.log('i is: ', i, 'created a new number', numberList[newNum], "newNum is: ", newNum);

            result = result.concat(numberList[newNum]);
            numberList.splice(newNum, 1);
        }
        return result;
    }
    useEffect(() => {
        setGridArray(randomNumber(1, 25));
        setOutputArray(randomNumber(1, 25));
    }, [])

    const numberClick = (event) => {
        event.preventDefault();
        let clickedNum = event.target.innerText;
        !outputArray.includes(clickedNum) && setOutputArray(outputArray.concat(event.target.innerText));
    }

    const checkWin = () => {
        console.log(document.getElementById("numbar").lastElementChild.value);
        setHasWin(true);
        //return true;
    }



    return (
        <div>
            {(!hasWin)
                ? <div className='Game--on'>
                    <span className='game__greeting'>Hi {person}! Let's play!</span>
                    {/* <NumberBar inputArray = {outputArray}/> */}
                    <NumBar inputArray={outputArray} />
                    {/* <DisplayNumber inputArray={outputArray} /> */}
                    {/* <DisplayNumber inputArray= {gridArray} /> */}
                    <Board inputArray={gridArray} onClick={numberClick} />
                    {/* <span className="Game--info"></span> */}
                    <img className='Game--btn' src={BBtn} onClick={checkWin} />
                </div>
                : <WinningPage person={person} />}
        </div>
    )
}

export default Game;