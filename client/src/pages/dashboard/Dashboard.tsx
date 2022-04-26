import Axios, { AxiosRequestHeaders } from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MinesDashboard from "../../components/mines/MinesDashboard";
import { setBalance } from "../../features/balance/balanceSlice";
import {
  setUserId,
  setUsername,
  setWelcomeBonus,
  userLoggedIn,
} from "../../features/currentUser/currentUserSlice";
import CrashDashboard from "../crash/CrashDashboard";
import WalletDashboard from "../wallet/WalletDashboard";
import "./Dashboard.css";
import NavbarDashboard from "./NavbarDashboard";

export const Dashboard: React.FC = () => {
  // user logged in state
  const userLoggedInState = useSelector(
    (state: any) => state.currentUser.loggedIn
  );

  // dispatch
  const dispatch = useDispatch();

  const headers: AxiosRequestHeaders = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  };

  // Verify User Login
  useEffect(() => {
    Axios.post(
      `${process.env.REACT_APP_BACKEND}/api/verifyUser`,
      {},
      { headers: headers }
    )
      .then((res) => {
        dispatch(userLoggedIn());
        dispatch(setWelcomeBonus(res.data.welcomeBonus));
        dispatch(setUsername(res.data.username));
        dispatch(setBalance(res.data.balance));
        dispatch(setUserId(res.data.userId));
      })
      .catch((err: Error) => {
        window.location.pathname = "/";
      });
  }, []);

  return (
    <>
      {userLoggedInState == true && (
        <div className="dashboardWrapper">
          <NavbarDashboard />

          {window.location.pathname == "/dashboard" && (
            <div className="dashboardContainer">
              <div className="dashboard__row">
                <p>Featured Games</p>
                <div className="games__carousel">
                  <div className="game__item">Dice</div>
                  <div className="game__item">Dice</div>
                  <div className="game__item">Dice</div>
                  <div className="game__item">Dice</div>
                  <div className="game__item">Dice</div>
                  <div className="game__item">Dice</div>
                  <div className="game__item">Dice</div>
                  <div className="game__item">Dice</div>
                </div>
              </div>
            </div>
          )}

          {window.location.pathname == "/mines" && (
            <div className="dashboardContainer">
              <MinesDashboard />
            </div>
          )}

          {window.location.pathname == "/crash" && (
            <div className="dashboardContainer">
              <CrashDashboard />
            </div>
          )}

          {window.location.pathname == "/wallet" && (
            <div className="dashboardContainer">
              <WalletDashboard />
            </div>
          )}
        </div>
      )}
    </>
  );
};
