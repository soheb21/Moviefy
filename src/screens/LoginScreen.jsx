import React, { useState } from "react";
import Nav from "../Nav";
import "./LoginScreen.css";
import SignupScreen from "./SignupScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="login">
      <div className="login_header">
        <img
          className="login_logo"
          src='https://play-lh.googleusercontent.com/hCVFXT9PwVQ2kE8wa8RGZPMWaS4fy4dPmvxox685MIoYicG8j5h7c4XrRV8skhAq5c4=w220-rw'
          alt=""
        />
        <button className="singin_btn" onClick={() => setSignIn(true)}>
          Sign In
        </button>
        <div className='login_gradiant'></div>
        <div className="login_body">
          {signIn ? (
            <SignupScreen />
          ) : (
            <>
              <h1>Enjoy the movies, TV shows, and more.</h1>
              <h2>Watch anywhere. Cancel anytime.</h2>

              <div className="login_input">
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => setSignIn(true)}
                >
                  GET STARTED
                </button>

              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
