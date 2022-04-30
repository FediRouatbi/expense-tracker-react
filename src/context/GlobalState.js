import React, { createContext, useReducer, useContext } from "react";
import { AppReducer } from "./AppReducer";
export const ACTIONS = {
  ADD_TRANSACTION: "add_transaction",
  DEL_TRANSACTION: "del_transaction",
};
//Intial state
const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -80 },
    { id: 2, text: "Salary", amount: 600 },
    { id: 3, text: "Book", amount: -30 },
    { id: 4, text: "Camera", amount: 200 },
  ],
};
export const useData = () => {
  return useContext(GlobalContext);
};
//Create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  function deleteTransaction(id) {
    console.log(id);
    dispatch({ type: ACTIONS.DEL_TRANSACTION, payload: id });
  }
  function addTransaction(tran) {
    dispatch({
      type: ACTIONS.ADD_TRANSACTION,
      payload: {
        id: Math.round(Math.random() * 1000),
        text: tran.name,
        amount: tran.amount,
      },
    });
  }

  return (
    <GlobalContext.Provider
      value={{ state, deleteTransaction, addTransaction }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
