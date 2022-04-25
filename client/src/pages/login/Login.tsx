import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "./Login.css";

export const Login: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();
  // Login inputs
  const [username, setUsername] = useState<string | undefined>("");
  const [usernameError, setUsernameError] = useState("");

  const [password, setPassword] = useState<string | undefined>("");
  const [passwordError, setPasswordError] = useState("");

  // handleFormSubmit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // reset error messages
    setUsernameError("");
    setPasswordError("");

    // username length check
    if (String(username).length > 15) {
      setUsernameError("Username is too long,");
    }

    // username empty check
    if (username == "") {
      setUsernameError("Enter username");
    }

    if (password == "") {
      setPasswordError("Enter password");
    }

    // password empty check

    if (username !== "" && password !== "") {
      axios
        .post(`${process.env.REACT_APP_BACKEND}/api/login`, {
          username,
          password,
        })
        .then((res) => {
          // username doesn't exist
          if (res.data.errorCode == 0) {
            return setUsernameError(res.data.message);
          }

          // password wrong
          if (res.data.errorCode == 1) {
            return setPasswordError(res.data.message);
          }
          navigate("/dashboard");
        })
        .catch(() => {
          window.location.pathname = "/";
        });
    }
  };

  return (
    <>
      <Navbar />
      <div className="login__container">
        <img className="login__background" src="./loginbackground.jpg" />
        <h1>Betting Ball</h1>
        <form onSubmit={handleSubmit} className="login__form">
          <h2>Sign in</h2>
          <p>Login into your account</p>
          <div className="form__label">
            <h4>Username</h4>
            {usernameError !== "" && (
              <h4 className="form__errorMessage">{usernameError}</h4>
            )}
          </div>
          <input
            value={username}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setUsername(e.target.value);
            }}
          />
          <div className="form__label">
            <h4>Password</h4>
            {passwordError !== "" && (
              <h4 className="form__errorMessage">{passwordError}</h4>
            )}
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
    </>
  );
};
