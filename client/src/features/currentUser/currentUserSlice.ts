import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: false,
  username: "Username",
  userIdState: null,
  welcomeBonus: false,
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

    setUserId: (state, action) => {
      state.userIdState = action.payload;
    },

    setWelcomeBonus: (state, action) => {
      state.welcomeBonus = action.payload;
    },

    userLogout: (state) => {
      state.loggedIn = false;
      window.localStorage.removeItem("accessToken");
      window.location.pathname = "/";
    },
  },
});

export const {
  userLoggedIn,
  setUsername,
  userLogout,
  setUserId,
  setWelcomeBonus,
} = currentUserSlice.actions;

export default currentUserSlice.reducer;
