import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 10,
};

export const balanceSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {
    setBalance: (state, action) => {
      state.balance = action.payload;
    },
  },
});

export const { setBalance } = balanceSlice.actions;

export default balanceSlice.reducer;
