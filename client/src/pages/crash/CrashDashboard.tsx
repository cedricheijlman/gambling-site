import React from "react";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CrashDashboard: React.FC = () => {
  return (
    <div className="crashDashboard">
      <Line
        width={"100%"}
        height={"100%"}
        options={{ maintainAspectRatio: false }}
        data={{
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [
            {
              label: "# of votes",
              data: [12, 12, 13, 16],
              backgroundColor: "white",
              borderColor: "white",
            },
          ],
        }}
      />
    </div>
  );
};

export default CrashDashboard;
