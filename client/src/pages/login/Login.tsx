import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export const Login: React.FC = () => {
  // Login inputs
  const [username, setUsername] = useState<string | undefined>("");
  const [password, setPassword] = useState<string | undefined>("");

  // handleFormSubmit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(username, password);
    if (username !== "" && password !== "") {
      axios
        .post(`${process.env.REACT_APP_BACKEND}/api/login`, {
          username,
          password,
        })
        .then((res) => {
          console.log(res);
        });
    }
  };

  return (
    <div className="login__container">
      <img className="login__background" src="./loginbackground.jpg" />
      <h1>Betting Ball</h1>
      <form onSubmit={handleSubmit} className="login__form">
        <h2>Sign in</h2>
        <p>Login into your account</p>
        <div className="form__label">
          <h4>Username</h4>
        </div>
        <input
          value={username}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setUsername(e.target.value);
          }}
        />
        <div className="form__label">
          <h4>Password</h4>
        </div>
        <input
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value);
          }}
          type="password"
        />
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
