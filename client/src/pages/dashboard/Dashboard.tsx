import Axios, { AxiosRequestHeaders } from "axios";
import React, { useEffect } from "react";
import MinesDashboard from "../../components/mines/MinesDashboard";
import CrashDashboard from "../crash/CrashDashboard";
import "./Dashboard.css";
import NavbarDashboard from "./NavbarDashboard";

export const Dashboard: React.FC = () => {
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
        console.log(res);
      })
      .catch((err: Error) => {
        window.location.pathname = "/";
      });
  }, []);

  return (
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
  );
};
