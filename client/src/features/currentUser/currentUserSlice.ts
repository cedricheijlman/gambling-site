import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: false,
};

export const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    userLoggedIn: (state) => {
      state.loggedIn = true;
    },
  },
});

export const { userLoggedIn } = currentUserSlice.actions;

export default currentUserSlice.reducer;
