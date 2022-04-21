import React, { useState } from "react";
import { Chart } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
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
  const [data, setData] = useState<any>([]);
  return (
    <div className="crashDashboard">
      <div className="betContainer">
        <h2>BetContainer</h2>{" "}
        <button
          onClick={() => {
            setData([...data, data.length + 10]);
          }}
        >
          Bet
        </button>
      </div>
      <div className="chartContainer">
        <Line
          width={450}
          height={450}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              y: {
                display: false,
              },
              x: {
                display: false,
              },
            },
          }}
          data={{
            labels: [
              2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34,
            ],
            datasets: [
              {
                borderWidth: 3,
                pointRadius: 0,
                label: "# of votes",
                data: data,
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
