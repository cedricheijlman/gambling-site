import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userLogout } from "../../features/currentUser/currentUserSlice";
import "./NavbarDashboard.css";
const NavbarDashboard: React.FC = () => {
  // Dispatch
  const dispatch = useDispatch();

  // { User username, User Current Balance } State
  const userBalance: number = useSelector(
    (state: any) => state.balance.balance
  );
  const currentUsername: string = useSelector(
    (state: any) => state.currentUser.username
  );

  // Handle Logout
  const handleLogout = () => {
    dispatch(userLogout());
  };

  return (
    <nav className="dashboard__nav">
      <h2>Betting Ball</h2>
      <div className="dashboard__options">
        <Link to={"/dashboard"}>
          <p>Dashboard</p>
        </Link>
        <p>Games</p>
        <p>Leaderboard</p>
      </div>
      <div className="nav__right">
        <div className="nav__rightMoneyContainer">
          <p>${userBalance}</p>
          <Link to={"/wallet"}>
            <button>Wallet</button>
          </Link>
        </div>
        <div className="nav__rightName">
          <p>{currentUsername}</p>
          <button
            onClick={() => {
              handleLogout();
            }}
          >
            Log Out
          </button>
        </div>
        <img height={40} width={40} src="./logo192.png" />
      </div>
    </nav>
  );
};

export default NavbarDashboard;
