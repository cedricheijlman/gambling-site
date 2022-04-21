import React, { useEffect, useState } from "react";
import { Chart } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import "./CrashDashboard.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Filler } from "chart.js";

ChartJS.register(
  Filler,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CrashDashboard: React.FC = () => {
  const [dynamicMultiplier, setDynamicMultiplier] = useState<any>([]);
  useEffect(() => {
    add();
  }, [dynamicMultiplier]);

  const add = () => {
    setTimeout(() => {
      setDynamicMultiplier((prev: any) => [...prev, prev.length + 1]);
    }, 700);
  };

  return (
    <div className="crashDashboard">
      <div className="betContainer">
        <p>Bet Amount</p>
        <div className="moneyInput">
          <AttachMoneyIcon className="moneyIcon" />
          <input type="number" />
          <button className="maxButton">Max</button>
        </div>
        <button className="betButton" onClick={() => {}}>
          Bet
        </button>
      </div>
      <div className="chartContainer">
        <div className="multiplier">
          <h2>1.17x</h2>
        </div>

        <Line
          options={{
            interaction: {
              intersect: false,
            },
            scales: {
              x: {
                type: "linear",
              },
            },
            animations: {
              x: {
                type: "number",
                easing: "linear",
                duration: 200,
              },
              y: {
                type: "number",
                easing: "linear",
                duration: 0,
              },
            },
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
          data={{
            labels: [
              2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34,
              36,
            ],
            datasets: [
              {
                borderWidth: 3,
                pointRadius: 0,
                label: "# of votes",
                data: dynamicMultiplier,
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)",
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default CrashDashboard;
