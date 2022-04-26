import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: false,
  username: "Username",
  userIdState: null,
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

    userLogout: (state) => {
      state.loggedIn = false;
      window.localStorage.removeItem("accessToken");
      window.location.pathname = "/";
    },
  },
});

export const { userLoggedIn, setUsername, userLogout, setUserId } =
  currentUserSlice.actions;

export default currentUserSlice.reducer;
