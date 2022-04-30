import React, { useState } from "react";
import { useData } from "../context/GlobalState";
export default function AddTransaction() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const data = useData();

  return (
    <>
      <h3>Add new transaction</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          data.addTransaction({ amount, name });
          setName("");
          setAmount("");
          e.target.querySelectorAll("input").forEach((el) => el.blur());
        }}
      >
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(+e.target.value)}
            required
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
}
