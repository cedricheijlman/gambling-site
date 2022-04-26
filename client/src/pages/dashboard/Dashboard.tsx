import Axios, { AxiosRequestHeaders } from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MinesDashboard from "../../components/mines/MinesDashboard";
import { setBalance } from "../../features/balance/balanceSlice";
import { userLoggedIn } from "../../features/currentUser/currentUserSlice";
import CrashDashboard from "../crash/CrashDashboard";
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
        dispatch(setBalance(res.data.balance));
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
        </div>
      )}
    </>
  );
};
