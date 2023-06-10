import { createSlice } from "@reduxjs/toolkit";

const setQuizSlice = createSlice({
  name: "setQuiz",
  initialState: {
    setQuiz: {
      allQuestion: null,
      isFetching: false,
      error: false,
    },
    currentSetQuiz: {
      currentSetQuiz: null,
      isFetching: false,
      error: false,
    },
  },
  reducers: {
    getSetQuizStart: (state) => {
      state.setQuiz.isFetching = true;
    },
    getSetQuizSuccess: (state, action) => {
      state.setQuiz.isFetching = false;
      state.setQuiz.allQuestion = action.payload;
      state.setQuiz.error = false;
    },
    getSetQuizFailed: (state) => {
      state.setQuiz.isFetching = false;
      state.setQuiz.allQuestion = null;
      state.setQuiz.error = true;
    },
    setCurrentSetQuizStart: (state) => {
      state.currentSetQuiz.isFetching = true;
    },
    setCurrentSetQuizSuccess: (state, action) => {
      state.currentSetQuiz.isFetching = false;
      state.currentSetQuiz.currentSetQuiz = action.payload;
      state.currentSetQuiz.error = false;
    },
    setCurrentSetQuizFailed: (state) => {
      state.setQuiz.isFetching = false;
      state.currentSetQuiz.currentSetQuiz = null;
      state.setQuiz.error = true;
    },
  },
});

export const {
  getSetQuizFailed,
  getSetQuizStart,
  getSetQuizSuccess,
  setCurrentSetQuizStart,
  setCurrentSetQuizSuccess,
  setCurrentSetQuizFailed,
} = setQuizSlice.actions;
export default setQuizSlice.reducer;
