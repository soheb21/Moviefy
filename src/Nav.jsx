import React, { useEffect, useState } from "react";
import "./Nav.css";
import { Link, useNavigate } from "react-router-dom";

function Nav() {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          onClick={() => navigate("/")}
          className="nav__logo"
          src='https://play-lh.googleusercontent.com/hCVFXT9PwVQ2kE8wa8RGZPMWaS4fy4dPmvxox685MIoYicG8j5h7c4XrRV8skhAq5c4=w220-rw'
          alt="Logo"
        />

        <img
          onClick={() => navigate("/profile")}
          className="nav__avatar"
          src='https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg'
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
