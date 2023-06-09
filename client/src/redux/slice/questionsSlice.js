import { createSlice } from "@reduxjs/toolkit";

const questionsSlice = createSlice({
  name: "questions",
  initialState: {
    questions: {
      allQuestion: null,
      isFetching: false,
      error: false,
    },
  },
  reducers: {
    getQuestionStart: (state) => {
      state.questions.isFetching = true;
    },
    getQuestionSuccess: (state, action) => {
      state.questions.isFetching = false;
      state.questions.allQuestion = action.payload;
      state.questions.error = false;
    },
    getQuestionFailed: (state) => {
      state.questions.isFetching = false;
      state.questions.allQuestion = null;
      state.questions.error = true;
    },
  },
});

export const { getQuestionFailed, getQuestionStart, getQuestionSuccess } = questionsSlice.actions;
export default questionsSlice.reducer;
