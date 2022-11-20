import React from "react";
import ChartsHeader from "../../components/ChartsHeader";
import DoughnutChart from "../../components/DoughnutChart";
import { pieChartData } from "../../data/dummy";

const Doughnut = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <ChartsHeader category="Doughnut Chart" title="Project Cost Breakdown" />
    <div className="w-full">
      <DoughnutChart
        id="chart-pie"
        data={pieChartData}
        legendVisiblity
        height="full"
      />
    </div>
  </div>
);

export default Doughnut;
