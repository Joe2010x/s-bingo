import React, { useEffect, useState, useRef } from 'react';

function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      let id = setInterval(() => {
        savedCallback.current();
      }, delay);
      return () => clearInterval(id);
    }, [delay]);
  }

const NumBar = ({inputArray, checkWin}) =>{
    let ipArray = inputArray.slice();
    console.log(ipArray);
    const [numList, setNumList] = useState([]);
    const [counter, setCounter] = useState(0);
    const [displayBox, setDisplayBox] = useState(['quiet', ''])
      
    const display = (number) => {
        setDisplayBox(['noise', number]);
        let timer = setTimeout(() => {
            setDisplayBox(['quiet', '']);
        }, 1000);
    }

    let timeOut = useInterval(() => {
      if (counter < 25)  {
      setCounter(counter + 1);
      setNumList(prev=>prev.concat(' '+ipArray[counter].toString()))
      display(ipArray[counter].toString())
        if (counter >= 25) clearTimeout (timeOut);}
    }, 3000);

 
    
    return (
        <div>
            {(counter<25) && <div id='numbar' className='callnumber__bar'>{numList && numList.map(item => <span key = {`numList${item}`} className='numList'>{item}</span>)}</div>
            }
            {/* {displayNumber && <DisplayBox number={displayNumber}/>} */}
            {(counter<25) &&<div id='jumpnum' className={`${displayBox[0]} callnumber--jump`}>{displayBox[1]}</div>}
        </div>
    )
}

export default NumBar; 