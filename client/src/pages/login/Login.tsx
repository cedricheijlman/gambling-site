import React from "react";
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
        <button>Login</button>
      </form>
    </div>
  );
};
