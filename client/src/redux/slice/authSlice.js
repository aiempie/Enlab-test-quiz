import { createSlice } from "@reduxjs/toolkit";
import setAuthToken from "../../helper/setAuthToken";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: {
      currentUser: null,
      isFetching: false,
      error: false,
    },
    register: { isFetching: false, success: false, error: false },
  },
  reducers: {
    loginStart: (state) => {
      state.login.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.login.isFetching = false;
      state.login.currentUser = action.payload;
      localStorage.setItem("accessToken", action.payload.accessToken);
      setAuthToken(localStorage["accessToken"]);
      state.login.error = false;
    },
    loginFailed: (state) => {
      state.login.isFetching = false;
      state.login.currentUser = null;
      state.login.error = true;
      localStorage.removeItem("accessToken");
      setAuthToken(null);
    },
    registerStart: (state) => {
      state.register.isFetching = true;
    },
    registerSuccess: (state) => {
      state.register.isFetching = false;
      state.register.error = false;
      state.register.success = true;
    },
    registerFailed: (state) => {
      state.register.isFetching = false;
      state.register.error = true;
      state.register.success = false;
    },
  },
});

export const {
  loginStart,
  loginFailed,
  loginSuccess,
  registerFailed,
  registerStart,
  registerSuccess,
} = authSlice.actions;

export default authSlice.reducer;
