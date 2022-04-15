import React from "react";
import { Link } from "react-router-dom";
import "./NavbarDashboard.css";
const NavbarDashboard: React.FC = () => {
  return (
    <nav className="dashboard__nav">
      <h2>Betting Ball</h2>
      <div className="dashboard__options">
        <Link to={"/dashboard"}>
          {" "}
          <p>Dashboard</p>
        </Link>

        <Link to={"/singlestake"}>
          <p>Single Stake</p>
        </Link>
        <p>Multi Stake</p>

        <p>Roulette</p>
        <p>Leaderboard</p>
      </div>
      <div className="nav__right">
        <div className="nav__rightMoneyContainer">
          <p>$3105.00</p>
          <button>Deposit</button>
        </div>
        <div>
          <p>Username</p>
          <button>Logout</button>
        </div>
        <img height={40} width={40} src="./logo192.png" />
      </div>
    </nav>
  );
};

export default NavbarDashboard;
