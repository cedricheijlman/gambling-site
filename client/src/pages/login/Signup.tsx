import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

import "./Signup.css";

const Signup: React.FC = () => {
  // Register inputs
  const [username, setUsername] = useState<string | undefined>("");
  const [usernameError, setUsernameError] = useState("");

  const [password, setPassword] = useState<string | undefined>("");
  const [passwordError, setPasswordError] = useState("");

  const [email, setEmail] = useState<string | undefined>("");
  const [emailError, setEmailError] = useState("");

  // HandleFormSubmit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // reset errors
    setUsernameError("");
    setPasswordError("");
    setEmailError("");

    // username length check
    if (String(username).length > 15) {
      setUsernameError("Username is too long.");
    }

    if (String(password).length > 35) {
      setPasswordError("Password too long.");
    }

    if (username == "") {
      setUsernameError("Username is blank");
    }

    if (password == "") {
      setPasswordError("Password is blank");
    }

    if (email == "") {
      setEmailError("Email is blank");
    }

    if (username !== "" && password !== "" && email !== "") {
      axios
        .post(`${process.env.REACT_APP_BACKEND}/api/register`, {
          username: username,
          password: password,
          email: email,
        })
        .then((res) => {
          if (res.data.errorCode == 0) {
            return setUsernameError(res.data.message);
          }

          if (res.data.errorCode == 0.1) {
            return setEmailError(res.data.message);
          }

          localStorage.setItem("accessToken", res.data.accessToken);
          window.location.pathname = "/dashboard";
        })
        .catch(() => {
          window.location.pathname = "/";
        });
    }
  };

  return (
    <>
      <Navbar />
      <div className="signup__container">
        <img className="signup__background" src="./loginbackground.jpg" />
        <h1>Betting Ball</h1>
        <form onSubmit={handleSubmit} className="signup__form">
          <h2>Create your account</h2>
          <p className="signup__formDescription">
            To access the game you need to have an account!
          </p>
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
            <h4>Email</h4>
            {emailError !== "" && (
              <h4 className="form__errorMessage">{emailError}</h4>
            )}
          </div>
          <input
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
            }}
          />
          <div className="form__label">
            <h4>Password</h4>
            {passwordError !== "" && (
              <h4 className="form__errorMessage">{passwordError}</h4>
            )}
          </div>
          <input
            type="password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value);
            }}
          />
          <p>
            Already a member?{" "}
            <Link to="/login">
              <span>Login</span>
            </Link>
          </p>
          <button>Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default Signup;
