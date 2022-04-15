import React from "react";
import "./Dashboard.css";
import NavbarDashboard from "./NavbarDashboard";

export const Dashboard: React.FC = () => {
  return (
    <div className="dashboardContainer">
      <NavbarDashboard />

      {window.location.pathname == "/dashboard" && <div>Dashboard</div>}

      {window.location.pathname == "/singlestake" && <h1>Single Stake</h1>}
    </div>
  );
};
