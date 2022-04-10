import React from "react";
import LoginButton from "../buttons/Loginbuttons";
import "./navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <h2>BettingBall</h2>
      <div className="navbar__right">
        <LoginButton>Login</LoginButton>
        <LoginButton>Signup</LoginButton>
      </div>
    </nav>
  );
};

export default Navbar;
