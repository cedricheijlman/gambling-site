import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup: React.FC = () => {
  // Register inputs
  const [username, setUsername] = useState<string | undefined>("");
  const [password, setPassword] = useState<string | undefined>("");
  const [email, setEmail] = useState<string | undefined>("");

  // HandleFormSubmit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(username, password, email);
    if (username !== "" && password !== "" && email !== "") {
      axios
        .post(`${process.env.REACT_APP_BACKEND}/api/register`, {
          username: username,
          password: password,
          email: email,
        })
        .then((res) => {
          console.log(res);
        });
    }
  };

  return (
    <div className="signup__container">
      <img className="signup__background" src="./loginbackground.jpg" />
      <h1>Betting Ball</h1>
      <form onSubmit={handleSubmit} className="signup__form">
        <h2>Create your account</h2>
        <p className="signup__formDescription">
          To access the game you need to have an account!
        </p>
        <input
          value={username}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setUsername(e.target.value);
          }}
          placeholder="Username"
        />
        <input
          value={email}
          placeholder="Email"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
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
  );
};

export default Signup;
