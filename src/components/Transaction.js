import React from "react";
import { useData } from "../context/GlobalState";
export default function Transaction({ id, amount, text }) {
  const data = useData();
  console.log();
  return (
    <li className={amount > 0 ? "plus" : "minus"}>
      {text}
      <span>
        {amount > 0 ? "+" : "-"} ${Math.abs(amount)}
      </span>

      <button
        onClick={(e) => data.deleteTransaction(id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
}
