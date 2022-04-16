import React, { useRef, useState } from "react";
import "./MinesDashboard.css";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

const MinesDashboard: React.FC = () => {
  const userMoneyExample: number = 500003;
  const [betAmountValue, setBetAmountValue] = useState("");

  const minesTotalRef = useRef<HTMLSelectElement>(null);

  const playBoard: number[][] = [
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ];

  const changeBetAmountValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) <= userMoneyExample) {
      console.log("he;;p");
      console.log(e);

      setBetAmountValue(e.target.value);
    }
  };

  const imageHandling = (row: number, col: number) => {
    if (playBoard[row][col] == 1) {
      return <h1>Lose</h1>;
    } else {
      return <h1>Win</h1>;
    }
  };

  const handleBet = () => {
    if (userMoneyExample > 0) {
      console.log(minesTotalRef.current?.value);
    }
  };

  return (
    <div className="minesWrapper">
      <div className="minesContainer">
        <div className="minesContainer__left">
          <p>Bet Amount</p>
          <div className="minesContainer__betContainer">
            <AttachMoneyIcon className="moneyIcon" />
            <input
              type="number"
              value={betAmountValue}
              onChange={changeBetAmountValue}
            />
            <button className="maxButton">Max</button>
          </div>
          <div className="minesContainer__minesTotal">
            <p>Mines</p>
            <select ref={minesTotalRef}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <button className="betButton" onClick={handleBet}>
            Bet
          </button>
        </div>
        <div className="minesContainer__right">
          <div className="row">
            <div className="col">
              <div className="theFront">
                <img alt="Basketball" src="./basket.png" />
              </div>
              <div className="theBack">{imageHandling(0, 0)}</div>
            </div>
            <div className="col">
              <div className="theFront">
                <img alt="Basketball" src="./basket.png" />
              </div>
              <div className="theBack">{imageHandling(0, 1)}</div>
            </div>
            <div className="col">
              <div className="theFront">
                <img alt="Basketball" src="./basket.png" />
              </div>
              <div className="theBack">{imageHandling(0, 2)}</div>
            </div>
            <div className="col">
              <div className="theFront">
                <img alt="Basketball" src="./basket.png" />
              </div>
              <div className="theBack">{imageHandling(0, 3)}</div>
            </div>
            <div className="col">
              <div className="theFront">
                <img alt="Basketball" src="./basket.png" />
              </div>
              <div className="theBack">{imageHandling(0, 4)}</div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="theFront">
                <img alt="Basketball" src="./basket.png" />
              </div>
              <div className="theBack">{imageHandling(1, 0)}</div>
            </div>
            <div className="col">
              <div className="theFront">
                <img alt="Basketball" src="./basket.png" />
              </div>
              <div className="theBack">{imageHandling(1, 1)}</div>
            </div>
            <div className="col">
              <div className="theFront">
                <img alt="Basketball" src="./basket.png" />
              </div>
              <div className="theBack">{imageHandling(1, 2)}</div>
            </div>
            <div className="col">
              <div className="theFront">
                <img alt="Basketball" src="./basket.png" />
              </div>
              <div className="theBack">{imageHandling(1, 3)}</div>
            </div>
            <div className="col">
              <div className="theFront">
                <img alt="Basketball" src="./basket.png" />
              </div>
              <div className="theBack">{imageHandling(1, 4)}</div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="theFront">
                <img alt="Basketball" src="./basket.png" />
              </div>
              <div className="theBack">{imageHandling(2, 0)}</div>
            </div>
            <div className="col">
              <div className="theFront">
                <img alt="Basketball" src="./basket.png" />
              </div>
              <div className="theBack">{imageHandling(2, 1)}</div>
            </div>
            <div className="col">
              <div className="theFront">
                <img alt="Basketball" src="./basket.png" />
              </div>
              <div className="theBack">{imageHandling(2, 2)}</div>
            </div>
            <div className="col">
              <div className="theFront">
                <img alt="Basketball" src="./basket.png" />
              </div>
              <div className="theBack">{imageHandling(2, 3)}</div>
            </div>
            <div className="col">
              <div className="theFront">
                <img alt="Basketball" src="./basket.png" />
              </div>
              <div className="theBack">{imageHandling(2, 4)}</div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="theFront">
                <img alt="Basketball" src="./basket.png" />
              </div>
              <div className="theBack">{imageHandling(3, 0)}</div>
            </div>
            <div className="col">
              <div className="theFront">
                <img alt="Basketball" src="./basket.png" />
              </div>
              <div className="theBack">{imageHandling(3, 1)}</div>
            </div>
            <div className="col">
              <div className="theFront">
                <img alt="Basketball" src="./basket.png" />
              </div>
              <div className="theBack">{imageHandling(3, 2)}</div>
            </div>
            <div className="col">
              <div className="theFront">
                <img alt="Basketball" src="./basket.png" />
              </div>
              <div className="theBack">{imageHandling(3, 3)}</div>
            </div>
            <div className="col">
              <div className="theFront">
                <img alt="Basketball" src="./basket.png" />
              </div>
              <div className="theBack">{imageHandling(3, 4)}</div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="theFront">
                <img alt="Basketball" src="./basket.png" />
              </div>
              <div className="theBack">{imageHandling(4, 0)}</div>
            </div>
            <div className="col">
              <div className="theFront">
                <img alt="Basketball" src="./basket.png" />
              </div>
              <div className="theBack">{imageHandling(4, 1)}</div>
            </div>
            <div className="col">
              <div className="theFront">
                <img alt="Basketball" src="./basket.png" />
              </div>
              <div className="theBack">{imageHandling(4, 2)}</div>
            </div>
            <div className="col">
              <div className="theFront">
                <img alt="Basketball" src="./basket.png" />
              </div>
              <div className="theBack">{imageHandling(4, 3)}</div>
            </div>
            <div className="col">
              <div className="theFront">
                <img alt="Basketball" src="./basket.png" />
              </div>
              <div className="theBack">{imageHandling(4, 4)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinesDashboard;
