import React from "react";
import DoughnutChart from "../../components/Chart";
import TransactionForm from "../../components/TransactionForm";

const Tracker = () => {
  return (
    <div className="container mx-auto">
      <div className="columns-24">
        <h2 className="rounded text-center bg-black px-4 py-5 uppercase text-white">
          transactions tracker
        </h2>
      </div>
      <div className="columns-2 gap-6">
        <DoughnutChart className="w-full" />
        <TransactionForm className="w-full" />
      </div>
    </div>
  );
};

export default Tracker;
