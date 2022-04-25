import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
};

export const balanceSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {
    setBalance: (state) => {
      state.balance += 500;
    },
  },
});

export const { setBalance } = balanceSlice.actions;

export default balanceSlice.reducer;
