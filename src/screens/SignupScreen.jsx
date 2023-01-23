import React, { useRef } from "react";
import { auth } from "../firebase";
import "./SignupScreen.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

function SignupScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((err) => {
        alert("The email is invalid! Type in your real email address or check if it is correctly formated and try again.");
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        // Signed in
        console.log(authUser);
        // ...
      })
      .catch((error) => {
        alert("There is no user with corresponding credentials. Please try again.");
      });
  };

  return (
    <div className='singIn'>
      <h1>Sing In/Up</h1>
      <form>
        <label className='singIn_label'>Email</label>
        <input  ref={emailRef} className='singIn_input'  type="email" placeholder='Enter Your Email' />
        <label className='singIn_label'>Password</label>
        <input ref={passwordRef} className='singIn_input'  type="password" placeholder='Enter Your password' />
        <button className='singup_btn' onClick={signIn} >Sing-In</button>
        <h4>
          <span className='sing_In_moviefy'>New to moviefy?</span>
          <span className='sing_up_link' onClick={register}>Sing Up now</span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;
