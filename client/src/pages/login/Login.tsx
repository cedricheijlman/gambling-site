import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export const Login: React.FC = () => {
  return (
    <div className="login__container">
      <img className="login__background" src="./loginbackground.jpg" />
      <h1>Betting Ball</h1>
      <form className="login__form">
        <h2>Sign in</h2>
        <p>Login into your account</p>
        <input placeholder="Username" />
        <input type="password" placeholder="Password" />
        <p>
          Don't have an account yet?{" "}
          <Link to="/register">
            <span>Signup</span>
          </Link>
        </p>
        <button>Login</button>
      </form>
    </div>
  );
};
