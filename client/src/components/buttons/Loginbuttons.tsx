import React from "react";
import { Link } from "react-router-dom";
import "./LoginButtons.css";

interface Props {
  children: React.ReactNode;
  login: String;
}

const LoginButton: React.FC<Props> = (props) => {
  return (
    <Link to={props.login == "login" ? "/login" : "/register"}>
      <button className="loginButtonsFC">{props.children}</button>
    </Link>
  );
};

export default LoginButton;
