import React from "react";
import Header from "../components/Header";

const Dashboard = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Page" title="Dashboard" />
    </div>
  );
};

export default Dashboard;
