import { createSlice } from "@reduxjs/toolkit";

const difficultySlice = createSlice({
  name: "difficulty",
  initialState: {
    difficulty: {
      difficulty: null,
      isFetching: false,
      error: false,
    },
  },
  reducers: {
    getDifficultyStart: (state) => {
      state.difficulty.isFetching = true;
    },
    getDifficultySuccess: (state, action) => {
      state.difficulty.isFetching = false;
      state.difficulty.difficulty = action.payload;
      state.difficulty.error = false;
    },
    getDifficultyFailed: (state) => {
      state.difficulty.isFetching = false;
      state.difficulty.allQuestion = null;
      state.difficulty.error = true;
    },
  },
});

export const { getDifficultyStart, getDifficultySuccess, getDifficultyFailed } =
  difficultySlice.actions;
export default difficultySlice.reducer;
