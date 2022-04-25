import { configureStore } from "@reduxjs/toolkit";
import balanceReducer from "../features/balance/balanceSlice";
import currentUserReducer from "../features/currentUser/currentUserSlice";

export const store = configureStore({
  reducer: {
    balance: balanceReducer,
    currentUser: currentUserReducer,
  },
});
