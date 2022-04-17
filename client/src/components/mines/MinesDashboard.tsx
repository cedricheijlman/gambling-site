import React, { useRef, useState } from "react";
import "./MinesDashboard.css";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import Axios from "axios";

const MinesDashboard: React.FC = () => {
  const userMoneyExample: number = 500003;
  const [betAmountValue, setBetAmountValue] = useState("");
  const [playBoard, setPlayboard] = useState([
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ]);

  const [gameStart, setGameStart] = useState(false);

  const [checkedMines, setCheckedMines] = useState([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ]);

  const minesTotalRef = useRef<HTMLSelectElement>(null);

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

  const betButtonHandling = () => {
    if (gameStart == false) {
      return (
        <button className="betButton" onClick={handleBet}>
          Bet
        </button>
      );
    } else {
      return (
        <button onClick={handleCashout} className="cashoutButton">
          Cashout
        </button>
      );
    }
  };

  const handleBet = () => {
    if (userMoneyExample > 0) {
      Axios.post("http://localhost:5000/api/minesRandomizer", {
        minesTotal: minesTotalRef.current?.value,
      }).then((result) => {
        setGameStart(true);
        setPlayboard(result.data.randomizedPlayboard);
      });

      console.log(minesTotalRef.current?.value);
    }
  };

  const handleCashout = () => {
    setCheckedMines([
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ]);
    setGameStart(false);
  };

  const handleMineClick = (row: number, column: number) => {
    if (gameStart) {
      let copy = [...checkedMines];
      copy[row][column] = 1;
      setCheckedMines(copy);
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
          {betButtonHandling()}
        </div>
        <div className="minesContainer__right">
          <div className="row">
            {playBoard.map((e, index) => {
              return (
                <div
                  onClick={() => {
                    handleMineClick(0, index);
                  }}
                  className={
                    checkedMines[0][index] == 0 ? "col" : "col mineClicked"
                  }
                  key={index}
                >
                  <div className="theFront">
                    <img alt="Basketball" src="./basket.png" />
                  </div>
                  <div
                    className={
                      playBoard[0][index] == 1
                        ? "theBack loseMine"
                        : "theBack winMine"
                    }
                  >
                    {imageHandling(0, index)}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="row">
            {playBoard.map((e, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    handleMineClick(1, index);
                  }}
                  className={
                    checkedMines[1][index] == 0 ? "col" : "col mineClicked"
                  }
                >
                  <div className="theFront">
                    <img alt="Basketball" src="./basket.png" />
                  </div>
                  <div
                    className={
                      playBoard[1][index] == 1
                        ? "theBack loseMine"
                        : "theBack winMine"
                    }
                  >
                    {imageHandling(1, index)}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="row">
            {playBoard.map((e, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    handleMineClick(2, index);
                  }}
                  className={
                    checkedMines[2][index] == 0 ? "col" : "col mineClicked"
                  }
                >
                  <div className="theFront">
                    <img alt="Basketball" src="./basket.png" />
                  </div>
                  <div
                    className={
                      playBoard[2][index] == 1
                        ? "theBack loseMine"
                        : "theBack winMine"
                    }
                  >
                    {imageHandling(2, index)}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="row">
            {playBoard.map((e, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    handleMineClick(3, index);
                  }}
                  className={
                    checkedMines[3][index] == 0 ? "col" : "col mineClicked"
                  }
                >
                  <div className="theFront">
                    <img alt="Basketball" src="./basket.png" />
                  </div>
                  <div
                    className={
                      playBoard[3][index] == 1
                        ? "theBack loseMine"
                        : "theBack winMine"
                    }
                  >
                    {imageHandling(3, index)}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="row">
            {playBoard.map((e, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    handleMineClick(4, index);
                  }}
                  className={
                    checkedMines[4][index] == 0 ? "col" : "col mineClicked"
                  }
                >
                  <div className="theFront">
                    <img alt="Basketball" src="./basket.png" />
                  </div>
                  <div
                    className={
                      playBoard[4][index] == 1
                        ? "theBack loseMine"
                        : "theBack winMine"
                    }
                  >
                    {imageHandling(4, index)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinesDashboard;
