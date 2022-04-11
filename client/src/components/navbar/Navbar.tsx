import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "../buttons/Loginbuttons";
import "./navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h2>BettingBall</h2>
      </Link>
      <div className="navbar__right">
        <LoginButton login="login">Login</LoginButton>
        <LoginButton login="signup">Signup</LoginButton>
      </div>
    </nav>
  );
};

export default Navbar;
