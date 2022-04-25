import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./NavbarDashboard.css";
const NavbarDashboard: React.FC = () => {
  const count = useSelector((state: any) => state.balance.balance);
  return (
    <nav className="dashboard__nav">
      <h2>Betting Ball</h2>
      <div className="dashboard__options">
        <Link to={"/dashboard"}>
          {" "}
          <p>Dashboard</p>
        </Link>
        <p>Games</p>
        <p>Leaderboard</p>
      </div>
      <div className="nav__right">
        <div className="nav__rightMoneyContainer">
          <p>${count}</p>
          <button>Wallet</button>
        </div>
        <div className="nav__rightName">
          <p>Username</p>
          <button>Log Out</button>
        </div>
        <img height={40} width={40} src="./logo192.png" />
      </div>
    </nav>
  );
};

export default NavbarDashboard;
