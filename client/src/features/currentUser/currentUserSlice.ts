import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: false,
  username: "Username",
};

export const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    userLoggedIn: (state) => {
      state.loggedIn = true;
    },

    setUsername: (state, action) => {
      state.username = action.payload;
    },
  },
});

export const { userLoggedIn, setUsername } = currentUserSlice.actions;

export default currentUserSlice.reducer;
