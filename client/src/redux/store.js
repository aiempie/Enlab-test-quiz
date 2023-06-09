import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice";
import questionsSlice from "./slice/questionsSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    questions: questionsSlice,
  },
});

export default store;
