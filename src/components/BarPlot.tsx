import React, { FC } from "react";
import { Bar } from "react-chartjs-2";
const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Demo Bar plot",
      backgroundColor: "#20b2aa",
      borderColor: "transparent",
      hoverBackgroundColor: "#5f9ea0",
      data: [50, 30, 70, 15, 0, 100, 20],
    },
  ],
};
const options = {
  indexAxis: "y" as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right" as const,
    },
    title: {
      display: true,
      text: "Chart.js Horizontal Bar Chart",
    },
  },
};
const BarPlot: FC = () => {
  return (
    <div>
      <Bar data={data} />
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarPlot;
