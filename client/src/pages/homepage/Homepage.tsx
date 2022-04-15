import React from "react";
import LoginButton from "../../components/buttons/Loginbuttons";
import Navbar from "../../components/navbar/Navbar";
import "./Homepage.css";

const Homepage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="homepage__container">
        <div className="homepage__front">
          <div className="homepage__frontText">
            <h2>
              The Online <br /> Betting Game
            </h2>
            <p>Signup today to play the best game alive!</p>
            <LoginButton login="signup">Signup</LoginButton>
          </div>
          <img
            className="homepage__background"
            src="./background-homepage.jpg"
          />
        </div>

        <div className="homepage__features">
          <div>
            <h2>Our Features</h2>
            <div className="homepage__featuresCards"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
