import React from "react";
import { useData } from "../context/GlobalState";
export default function Balance() {
  const data = useData();
  const balance = data.state.transactions
    .map((elem) => elem.amount)
    .reduce((total, cur) => (total += cur), 0);
  return (
    <>
      <h4>Your Balance</h4>
      <h1>${balance}</h1>
    </>
  );
}
