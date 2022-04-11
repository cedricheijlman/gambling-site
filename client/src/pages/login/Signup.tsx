import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup: React.FC = () => {
  return (
    <div className="signup__container">
      <img className="signup__background" src="./loginbackground.jpg" />
      <h1>Betting Ball</h1>
      <form className="signup__form">
        <h2>Create your account</h2>
        <p className="signup__formDescription">
          To access the game you need to have an account!
        </p>
        <input placeholder="Username" />
        <input placeholder="Email" />
        <input type="password" placeholder="Password" />
        <p>
          Already a member?{" "}
          <Link to="/login">
            <span>Login</span>
          </Link>
        </p>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Signup;
