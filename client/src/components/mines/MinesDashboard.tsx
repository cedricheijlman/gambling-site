import React from "react";
import "./MinesDashboard.css";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

const MinesDashboard: React.FC = () => {
  return (
    <div className="minesWrapper">
      <div className="minesContainer">
        <div className="minesContainer__left">
          <p>Bet Amount</p>
          <div className="minesContainer__betContainer">
            <AttachMoneyIcon className="moneyIcon" />
            <input type="number" />
            <button className="maxButton">Max</button>
          </div>
          <button className="betButton">Bet</button>
        </div>
        <div className="minesContainer__right">
          <div className="row">
            <div className="col">Star</div>
            <div className="col">Star</div>
            <div className="col">Star</div>
            <div className="col">Star</div>
            <div className="col">Star</div>
          </div>
          <div className="row">
            <div className="col">Star</div>
            <div className="col">Star</div>
            <div className="col">Star</div>
            <div className="col">Star</div>
            <div className="col">Star</div>
          </div>
          <div className="row">
            <div className="col">Star</div>
            <div className="col">Star</div>
            <div className="col">Star</div>
            <div className="col">Star</div>
            <div className="col">Star</div>
          </div>
          <div className="row">
            <div className="col">Star</div>
            <div className="col">Star</div>
            <div className="col">Star</div>
            <div className="col">Star</div>
            <div className="col">Star</div>
          </div>
          <div className="row">
            <div className="col">Star</div>
            <div className="col">Star</div>
            <div className="col">Star</div>
            <div className="col">Star</div>
            <div className="col">Star</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinesDashboard;
