import React, { useRef, useState } from "react";
import "./MinesDashboard.css";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import Axios, { AxiosRequestHeaders } from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setBalance } from "../../features/balance/balanceSlice";

const MinesDashboard: React.FC = () => {
  // User Balance
  const userMoney: number = useSelector((state: any) => state.balance.balance);

  // useDispatch
  const dispatch = useDispatch();

  // Dynamic Playboard
  const [playBoard, setPlayboard] = useState([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ]);

  // Reset Playboard
  let resetPlayboard: number[][] = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ];

  // Playboard fully checked
  let fullyCheckedPlayboard: number[][] = [
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
  ];

  // Check Selected Mines
  const [checkedMines, setCheckedMines] = useState([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ]);

  // check if game started
  const [gameStart, setGameStart] = useState(false);

  // Keep track of how many bombs in input
  const minesTotalRef = useRef<HTMLSelectElement>(
    document.createElement("select")
  );

  // Bet Amount
  const [betAmountValue, setBetAmountValue] = useState(0);

  // Keep track of cashout money
  const [cashoutMoney, setCashoutMoney] = useState(Number(betAmountValue));

  // Change bet amount value
  const changeBetAmountValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) <= userMoney) {
      setBetAmountValue(Number(e.target.value));
    }
  };

  // Handle Bet Button
  const betButtonHandling = () => {
    if (gameStart == false) {
      return (
        <button className="betButton" onClick={handleBet}>
          {!gameStart && loading ? "Loading..." : "Bet"}
        </button>
      );
    } else {
      return (
        <button onClick={handleCashout} className="cashoutButton">
          Cashout ${cashoutMoney !== 0 ? cashoutMoney : "0.00"}
        </button>
      );
    }
  };

  // Handle Loading when clicked on bet
  const [loading, setLoading] = useState(false);

  // Handle Bet
  const handleBet = () => {
    const headers: AxiosRequestHeaders = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    };

    if (userMoney > 0) {
      Axios.post(
        `${process.env.REACT_APP_BACKEND}/api/minesRandomizer`,
        {
          minesTotal: minesTotalRef.current?.value,
        },
        { headers: headers }
      )
        .then((result) => {
          setCheckedMines(resetPlayboard);
          setCashoutMoney(Number(betAmountValue));
          setLoading(true);
          setTimeout(() => {
            setGameStart(true);
            setLoading(false);
            setPlayboard(result.data.randomizedPlayboard);
          }, 600);
        })
        .catch((err) => {
          console.log("word");
          console.log(err);
        });
    }
  };

  // when player clicks on cashout button
  const handleCashout = () => {
    // Set Win Sound
    let win: HTMLAudioElement = new Audio("./win.wav");
    win.volume = 0.4;
    win.play();

    // New Balance
    const completeNewBalance = Number(
      (
        Math.round((userMoney + cashoutMoney - betAmountValue) * 100) / 100
      ).toFixed(2)
    );

    // Set New Balance State
    dispatch(setBalance(completeNewBalance));

    // Set New Balance Backend Request
    const newBalanceHeaders: AxiosRequestHeaders = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    };

    Axios.post(
      `${process.env.REACT_APP_BACKEND}/api/minesBet`,
      { completeNewBalance: completeNewBalance },
      { headers: newBalanceHeaders }
    ).then((res) => {
      console.log(res);
    });

    // Fully Reveal Play Board
    setCheckedMines(fullyCheckedPlayboard);

    // Set Game False
    setGameStart(false);

    // Reset Cashout Money
    setCashoutMoney(0);
  };

  // If player clicks on bomb
  const handleLoseGame = () => {
    const loseCompleteNewBalance = Number(
      (Math.round((userMoney - betAmountValue) * 100) / 100).toFixed(2)
    );

    // Set new balance state
    dispatch(setBalance(loseCompleteNewBalance));

    // Set New Balance Backend Request
    const newBalanceHeaders: AxiosRequestHeaders = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    };

    Axios.post(
      `${process.env.REACT_APP_BACKEND}/api/minesBet`,
      { completeNewBalance: loseCompleteNewBalance },
      { headers: newBalanceHeaders }
    ).then((res) => {
      console.log(res);
    });

    // Set checked mines
    setCheckedMines(fullyCheckedPlayboard);

    // Set game false
    setGameStart(false);

    // Reset bet amount Value
    setBetAmountValue(0);

    // Reset Cashout Money
    setCashoutMoney(0);
  };

  // If player clicks on diamond
  const handleWin = () => {
    let totalBombs: number = Number(minesTotalRef?.current?.value);
    let newCashoutMoney =
      Math.floor(cashoutMoney * (1 + totalBombs / 55) * 100) / 100;
    console.log(cashoutMoney, "d");
    setCashoutMoney(newCashoutMoney);
  };

  // When player clicks on a mine tile
  const handleMineClick = (row: number, column: number) => {
    if (gameStart && checkedMines[row][column] == 0) {
      let click: HTMLAudioElement = new Audio("./click.wav");

      // Set Checked Mine Playboard
      let copy = [...checkedMines];
      copy[row][column] = 1;
      setCheckedMines(copy);

      // Check if is bomb
      if (playBoard[row][column] == 1) {
        return handleLoseGame();
      } else if (playBoard[row][column] == 0) {
        click.volume = 0.5;
        click.play();
        return handleWin();
      }
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
                  {checkedMines[0][index] && (
                    <div
                      className={
                        playBoard[0][index] == 1
                          ? "theBack loseMine"
                          : "theBack winMine"
                      }
                    ></div>
                  )}
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
                  {checkedMines[1][index] && (
                    <div
                      className={
                        playBoard[1][index] == 1
                          ? "theBack loseMine"
                          : "theBack winMine"
                      }
                    ></div>
                  )}
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
                  {checkedMines[2][index] && (
                    <div
                      className={
                        playBoard[2][index] == 1
                          ? "theBack loseMine"
                          : "theBack winMine"
                      }
                    ></div>
                  )}
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
                  {checkedMines[3][index] && (
                    <div
                      className={
                        playBoard[3][index] == 1
                          ? "theBack loseMine"
                          : "theBack winMine"
                      }
                    ></div>
                  )}
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
                  {checkedMines[4][index] && (
                    <div
                      className={
                        playBoard[4][index] == 1
                          ? "theBack loseMine"
                          : "theBack winMine"
                      }
                    ></div>
                  )}
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
