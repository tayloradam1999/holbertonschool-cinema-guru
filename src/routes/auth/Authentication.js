import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import './auth.css'



export default function Authentication(props) {
  // Returns an html form in that has who buttons 'Sign in' and 'Sign up'

  // Props:
  //  - setIsLoggedIn: function - sets the state of the isLoggedIn
  //  - setUserUsername: function - sets the state of the userUsername

  // init state for _switch (sign in or sign up)
  const [_switch, set_switch] = useState(false);
  // init state for username
  const [username, setUsername] = useState("");
  // init state for password
  const [password, setPassword] = useState("");

  // destructuring props
  const { setIsLoggedIn, setUserUsername } = props;

  // function to switch between sign in and sign up
  function handleSwitch() {
    set_switch(!_switch);

  }

  return (
    <div className="auth-container">
      <form className="auth-form">
        <div className="auth-form-header">
          <button type="button" className="auth-form-header-button" onClick={handleSwitch}>
            Sign In
          </button>
          <button type="button" className="auth-form-header-button" onClick={handleSwitch}>
            Sign Up
          </button>
        </div>
        <div className="auth-form-body">
          {/* if _switch is false, show sign in form */}
          {!_switch &&
            <Login 
              username={username}
              password={password}
              setUsername={setUsername}
              setPassword={setPassword}
            />
          }
          {/* if _switch is true, show sign up form */}
          {_switch &&
            <Register 
              username={username}
              password={password}
              setUsername={setUsername}
              setPassword={setPassword}
            />
          }
        </div>
      </form>
    </div>
  );
}