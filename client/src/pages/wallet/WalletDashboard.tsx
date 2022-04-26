import Axios, { AxiosRequestHeaders } from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./WalletDashboard.css";

const WalletDashboard: React.FC = () => {
  const userBalance = useSelector((state: any) => state.balance.balance);
  const userName = useSelector((state: any) => state.currentUser.username);
  const userId = useSelector((state: any) => state.currentUser.userIdState);

  // Handle claim Welcome Bonus
  const handleBonus = () => {
    console.log("handle");

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
    ).then((res) => {
      console.log(res);
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
