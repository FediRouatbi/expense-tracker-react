import { ACTIONS } from "./GlobalState";
export default AppReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TRANSACTION:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case ACTIONS.DEL_TRANSACTION:
      console.log(action.payload);
      return {
        ...state,
        transactions: state.transactions.filter(
          (el) => el.id !== action.payload
        ),
      };

    default:
      return { ...state };
  }
};
