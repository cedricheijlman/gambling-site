import Axios, { AxiosRequestHeaders } from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBalance } from "../../features/balance/balanceSlice";
import "./WalletDashboard.css";

const WalletDashboard: React.FC = () => {
  const userBalance = useSelector((state: any) => state.balance.balance);
  const userName = useSelector((state: any) => state.currentUser.username);
  const userId = useSelector((state: any) => state.currentUser.userIdState);

  // Dispatch
  let dispatch = useDispatch();

  // Handle claim Welcome Bonus
  const handleBonus = () => {
    const headers: AxiosRequestHeaders = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    };

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
      })
      .catch(() => {
        console.log("error");
      });
  };

  return (
    <div className="walletDashboard">
      <div className="userWallet">
        <h2>{userName}'s Wallet</h2>
        <p>Current Balance</p>
        <h4>${userBalance}</h4>
      </div>

      <div className="claimBonus">
        <button
          onClick={() => {
            handleBonus();
          }}
        >
          Claim Welcome Bonus
        </button>
      </div>
    </div>
  );
};

export default WalletDashboard;
