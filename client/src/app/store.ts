import { configureStore } from "@reduxjs/toolkit";
import balanceReducer from "../features/balance/balanceSlice";

export const store = configureStore({
  reducer: {
    balance: balanceReducer,
  },
});
