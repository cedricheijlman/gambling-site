import Axios, { AxiosRequestHeaders } from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBalance } from "../../features/balance/balanceSlice";
import { setWelcomeBonus } from "../../features/currentUser/currentUserSlice";
import "./WalletDashboard.css";

const WalletDashboard: React.FC = () => {
  const userBalance = useSelector((state: any) => state.balance.balance);
  const userName = useSelector((state: any) => state.currentUser.username);
  const userId = useSelector((state: any) => state.currentUser.userIdState);
  const welcomeBonus = useSelector(
    (state: any) => state.currentUser.welcomeBonus
  );

  // Dispatch
  let dispatch = useDispatch();

  // Authorization Header
  const headers: AxiosRequestHeaders = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  };

  // Handle claim Welcome Bonus
  const handleBonus = () => {
    Axios.post(
      `${process.env.REACT_APP_BACKEND}/api/claimBonus`,
      {
        userId: userId,
      },
      { headers: headers }
    )
      .then((res) => {
        if (res.data.message == "Already Claimed") {
          return console.log("Already Claimed");
        }
        dispatch(setBalance(userBalance + 1000));
        dispatch(setWelcomeBonus(true));
      })
      .catch(() => {
        console.log("error");
      });
  };

  // Bet Amount
  const [depositAmount, setDepositAmount] = useState<number | string>("");

  // Change bet amount value
  const changeBetAmountValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isFinite(Number(e.target.value))) {
      setDepositAmount(e.target.value);
    }
  };

  // Deposit Amount to backend
  const depositToBackend = () => {
    if (Number(depositAmount) > 0) {
      Axios.post(
        `${process.env.REACT_APP_BACKEND}/api/depositWallet`,
        { depositAmount: depositAmount, userId: userId },
        { headers: headers }
      )
        .then(async (res: any) => {
          const newDeposit = await Number(
            (Math.round(Number(depositAmount) * 100) / 100).toFixed(2)
          );

          dispatch(setBalance(userBalance + newDeposit));
          setDepositAmount("");
          console.log(res);
        })
        .catch((err: Error) => {
          console.log("error");
        });
    }
  };

  return (
    <div className="walletDashboard">
      <div className="userWallet">
        <h2>{userName}'s Wallet</h2>
        <p>Current Balance</p>
        <h4>${userBalance}</h4>
      </div>

      <div className="depositWallet">
        <input
          value={depositAmount}
          onChange={changeBetAmountValue}
          placeholder="Enter Deposit Amount"
        />
        <button onClick={depositToBackend}>Deposit</button>
      </div>

      <div className="claimBonus">
        {!welcomeBonus && (
          <button onClick={handleBonus}>Claim Welcome Bonus</button>
        )}

        {welcomeBonus && (
          <button className="welcomeBonusClaimed">
            Welcome Bonus Already Claimed
          </button>
        )}
      </div>
    </div>
  );
};

export default WalletDashboard;
