import React from "react";

import { useData } from "../context/GlobalState";
export default function IncomeExspenses() {
  const data = useData();

  const arr = data.state.transactions.map((elm) => elm.amount);
  const income = arr
    .filter((val) => val > 0)
    .reduce((total, cur) => (total += cur), 0);
  const exspense = arr
    .filter((val) => val < 0)
    .reduce((total, cur) => (total += Math.abs(cur)), 0);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${exspense}</p>
      </div>
    </div>
  );
}
