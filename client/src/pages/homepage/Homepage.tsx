import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./Homepage.css";

const Homepage: React.FC = () => {
  return (
    <div className="homepage__container">
      <div className="homepage__front">
        <div className="homepage__frontText">
          <h2>
            The Online <br /> Betting Game
          </h2>
        </div>
        <img src="./homepage-background.jpg" />
      </div>
    </div>
  );
};

export default Homepage;
