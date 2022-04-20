import React from "react";
import MinesDashboard from "../../components/mines/MinesDashboard";
import CrashDashboard from "../crash/CrashDashboard";
import "./Dashboard.css";
import NavbarDashboard from "./NavbarDashboard";

export const Dashboard: React.FC = () => {
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
