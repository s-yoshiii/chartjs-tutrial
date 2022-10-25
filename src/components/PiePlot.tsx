import React, { FC } from "react";
import { Pie, Doughnut } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
const data = {
  labels: ["Windows", "Mac", "Linux"],
  datasets: [
    {
      data: [98, 7, 3],
      backgroundColor: ["#4136e1", "#ff1493", "#ffce56"],
      hoverBackgroundColor: ["#36a2eb", "#ff6384", "#ffce56"],
      borderColor: ["transparent", "transparent", "transparent"],
    },
  ],
};
const PiePlot: FC = () => {
  return (
    <div>
      <Pie data={data} />
      <Doughnut data={data} />
    </div>
  );
};

export default PiePlot;
