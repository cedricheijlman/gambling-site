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
          <div className="minesContainer__minesTotal">
            <p>Mines</p>
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
          </div>
          <button className="betButton">Bet</button>
        </div>
        <div className="minesContainer__right">
          <div className="row">
            <div className="col">
              <div className="theFront">
                <img src="./basket.png" />
              </div>
              <div className="theBack"></div>
            </div>
            <div className="col">
              <div className="theFront">
                <img src="./basket.png" />
              </div>
              <div className="theBack"></div>
            </div>
            <div className="col">
              <div className="theFront">
                <img src="./basket.png" />
              </div>
              <div className="theBack"></div>
            </div>
            <div className="col">
              <div className="theFront">
                <img src="./basket.png" />
              </div>
              <div className="theBack"></div>
            </div>
            <div className="col">
              <div className="theFront">
                <img src="./basket.png" />
              </div>
              <div className="theBack"></div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="theFront">
                <img src="./basket.png" />
              </div>
              <div className="theBack"></div>
            </div>
            <div className="col">
              <div className="theFront">
                <img src="./basket.png" />
              </div>
              <div className="theBack"></div>
            </div>
            <div className="col">
              <div className="theFront">
                <img src="./basket.png" />
              </div>
              <div className="theBack"></div>
            </div>
            <div className="col">
              <div className="theFront">
                <img src="./basket.png" />
              </div>
              <div className="theBack"></div>
            </div>
            <div className="col">
              <div className="theFront">
                <img src="./basket.png" />
              </div>
              <div className="theBack"></div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="theFront">
                <img src="./basket.png" />
              </div>
              <div className="theBack"></div>
            </div>
            <div className="col">
              <div className="theFront">
                <img src="./basket.png" />
              </div>
              <div className="theBack"></div>
            </div>
            <div className="col">
              <div className="theFront">
                <img src="./basket.png" />
              </div>
              <div className="theBack"></div>
            </div>
            <div className="col">
              <div className="theFront">
                <img src="./basket.png" />
              </div>
              <div className="theBack"></div>
            </div>
            <div className="col">
              <div className="theFront">
                <img src="./basket.png" />
              </div>
              <div className="theBack"></div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="theFront">
                <img src="./basket.png" />
              </div>
              <div className="theBack"></div>
            </div>
            <div className="col">
              <div className="theFront">
                <img src="./basket.png" />
              </div>
              <div className="theBack"></div>
            </div>
            <div className="col">
              <div className="theFront">
                <img src="./basket.png" />
              </div>
              <div className="theBack"></div>
            </div>
            <div className="col">
              <div className="theFront">
                <img src="./basket.png" />
              </div>
              <div className="theBack"></div>
            </div>
            <div className="col">
              <div className="theFront">
                <img src="./basket.png" />
              </div>
              <div className="theBack"></div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="theFront">
                <img src="./basket.png" />
              </div>
              <div className="theBack"></div>
            </div>
            <div className="col">
              <div className="theFront">
                <img src="./basket.png" />
              </div>
              <div className="theBack"></div>
            </div>
            <div className="col">
              <div className="theFront">
                <img src="./basket.png" />
              </div>
              <div className="theBack"></div>
            </div>
            <div className="col">
              <div className="theFront">
                <img src="./basket.png" />
              </div>
              <div className="theBack"></div>
            </div>
            <div className="col">
              <div className="theFront">
                <img src="./basket.png" />
              </div>
              <div className="theBack"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinesDashboard;
