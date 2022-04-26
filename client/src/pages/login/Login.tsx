import axios, { AxiosRequestHeaders } from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { setBalance } from "../../features/balance/balanceSlice";
import {
  setUsername,
  userLoggedIn,
} from "../../features/currentUser/currentUserSlice";
import "./Login.css";

export const Login: React.FC = () => {
  /* -------------------{  User already logged in }----------------------- */
  // Dispatch
  const dispatch = useDispatch();

  // Navigate
  const navigate: NavigateFunction = useNavigate();

  // Authentication Headers
  const headers: AxiosRequestHeaders = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  };

  // Verify User Login
  useEffect(() => {
    if (
      localStorage.getItem("accessToken") !== "" &&
      localStorage.getItem("accessToken") !== null &&
      localStorage.getItem("accessToken") !== undefined
    ) {
      axios
        .post(
          `${process.env.REACT_APP_BACKEND}/api/verifyUser`,
          {},
          { headers: headers }
        )
        .then((res) => {
          dispatch(userLoggedIn());
          dispatch(setUsername(res.data.username));
          dispatch(setBalance(res.data.balance));
          navigate("/dashboard");
        })
        .catch((err: Error) => {
          localStorage.removeItem("accessToken");
        });
    } else {
      localStorage.removeItem("accessToken");
    }
  }, []);

  /*-------------------{  Login  }----------------------- */

  // Login inputs
  const [username, setLoginUsername] = useState<string | undefined>("");
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
          localStorage.setItem("accessToken", res.data.accessToken);
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
              setLoginUsername(e.target.value);
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
