import React, { useRef, useState } from 'react';
import './App.css';
import LogIn from './components/LogIn';
import WaitingRoom from './components/WaitingRoom';

function App() {
  const nameInput = useRef();
  const [isLogedIn, setLogIn] = useState(false);
  const [person,setPerson] = useState('')
  const logInKeyDown =(event)=>{
    console.log(event.key);
    if (event.key === "Enter")
    {
      setLogIn(true);
      setPerson('~'+nameInput.current.value);
    }
  }
  return (
    <div className="App">

      {(isLogedIn)
        ? <WaitingRoom 
          person={person}/>
        : <LogIn
          inputValue ={nameInput} 
          logInKeyDown={logInKeyDown}/>}
    
    </div>
  );
}

export default App;
