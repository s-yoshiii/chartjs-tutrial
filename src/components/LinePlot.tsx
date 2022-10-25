import React, { FC } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Demo Line plot",
      backgroundColor: "#008080",
      borderColor: "#7fffd4",
      pointBorderWidth: 10,
      data: [5, 6, 9, 15, 30, 40, 80],
    },
  ],
};
const LinePlot: FC = () => {
  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default LinePlot;
