import React from "react";
import logo from "./image/bgw.png";

const LogIn = ({ inputValue, logInKeyDown }) => {
    return (
        <div className="welcome">

            <img className="welcome__logo" src={logo} />
            <div className="welcome__div">
                <span className="welcome__name">name</span>
                <br/>
                <input
                    ref={inputValue}
                    autoFocus placeholder="Enter Your Name Here"
                    onKeyDown={(e) => logInKeyDown(e)}></input>
            </div>
        </div>
    )
}

export default LogIn;