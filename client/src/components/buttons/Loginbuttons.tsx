import React from "react";
import "./LoginButtons.css";

interface Props {
  children: React.ReactNode;
}

const LoginButton: React.FC<Props> = (props) => {
  return <button className="loginButtonsFC">{props.children}</button>;
};

export default LoginButton;
