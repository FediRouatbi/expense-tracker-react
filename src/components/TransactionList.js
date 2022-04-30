import React from "react";

import Transaction from "./Transaction";
import { useData } from "../context/GlobalState";
export default function TransactionList() {
  const data = useData();

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {data.state.transactions.map((elm) => {
          console.log(elm);
          return (
            <Transaction
              key={elm.id}
              id={elm.id}
              text={elm.text}
              amount={elm.amount}
            />
          );
        })}
      </ul>
    </>
  );
}
