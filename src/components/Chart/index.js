import { Chart, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import React from "react";
Chart.register(ArcElement);

const config = {
  data: {
    datasets: [
      {
        label: "My First Dataset",
        data: [90, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
        borderRadius: 100,
        cutout: 215,
        spacing: 10,
      },
    ],
  },
};
const DoughnutChart = ({ className }) => {
  return (
    <div className={`${className} relative`}>
      <div className="">
        <Doughnut className="h-1" {...config} />
      </div>
      <h1 className="absolute font-normal text-xl z-[-1] top-0 bottom-0 flex justify-center items-center w-full">
        Total <span className="ml-2 text-green-500">$55</span>
      </h1>
    </div>
  );
};

export default DoughnutChart;
