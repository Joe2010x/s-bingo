import React, { useEffect, useState, useRef } from 'react'
import DisplayBox from './DisplayBox'

// function useInterval(callback, delay) {
//   const savedCallback = useRef();

//   // Remember the latest callback.
//   useEffect(() => {
//     savedCallback.current = callback;
//   }, [callback]);

//   // Set up the interval.
//   useEffect(() => {
//     let id = setInterval(() => {
//       savedCallback.current();
//     }, delay);
//     return () => clearInterval(id);
//   }, [delay]);
// }

const NumberBar = ({ inputArray }) => {
  // const [counter,setCounter]=useState(0);
  // let newString = counter.toString();
  console.log(inputArray);
 // const [counter,setCounter] = useState(0);
  const [numberList, setNumberList] = useState([]);
  //const [newNumber, setDisplayBox] = useState(inputArray[0]);
  //console.log(numberList);
  // const [counter, setCounter] = useState(-1);
  useEffect(()=> {
    //let length =0;
    //const [counter,setCounter] = useState(0);
    let timerOut = setInterval(() => {
      setNumberList(prev=> {
        // length = prev.length;
        console.log(inputArray[prev.length]);
        return inputArray.slice(0,prev.length+1)
      }
        // // setDisplayBox(inputArray[length])
        // return [...prev,inputArray[length]];
      )
      
      if (numberList.length >= 24) clearInterval(timerOut);
      
    }, 5000);
  },[])

  //let d = 10;
  //const display = (number) => {
  //setDisplayBox(['noise', inputArray[0]]);
  // setTimeout(() => {
  //   setDisplayBox(['quiet', '']);
  // }, 1000);
  //clearTimeout(timer);
  // }

  // display(inputArray[0]);


  // useInterval(() => {
  //   setCounter(counter + 1);
  //   setNumberList(prev => prev.concat(' ' + inputArray[counter].toString()))
  //   display(inputArray[counter]);
  //   console.log(counter);
  //   // if (counter === 25) clearInterval(timeInterval);
  // }, 5000);
  // setNumberList([inputArray[counter]]);
  // useEffect (()=>{
  //   use
  // },[])



  return (
    <div className='numberBar'>
      This is numberBar
      {numberList && numberList.map(num => <span key = {`numberList${num}`} className='span-number'>{num}</span>)}
      {/* <div className='numberBar__list'>{numberList}</div> */}
      {/* <DisplayBox number={newNumber} /> */}
      {/* <div className={displayBox[0]}>{displayBox[1]}</div> */}
    </div>
  )
}

export default NumberBar;