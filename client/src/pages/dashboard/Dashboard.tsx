import React from "react";
import "./Dashboard.css";
import NavbarDashboard from "./NavbarDashboard";

export const Dashboard: React.FC = () => {
  return (
    <div className="dashboardWrapper">
      <NavbarDashboard />

      {window.location.pathname == "/dashboard" && (
        <div className="dashboardContainer">
          <div className="check">
            <p>Single Player</p>
            <div className="games__carousel">
              <div className="game__item">Dice</div>
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
          <div className="check">
            <p>Multi Player</p>
            <div className="games__carousel">
              <div className="game__item">Dice</div>
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

      {window.location.pathname == "/singlestake" && <h1>Single Stake</h1>}
    </div>
  );
};
