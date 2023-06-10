import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "categories",
  initialState: {
    category: {
      categories: null,
      isFetching: false,
      error: false,
    },
  },
  reducers: {
    getCategoryStart: (state) => {
      state.category.isFetching = true;
    },
    getCategorySuccess: (state, action) => {
      state.category.isFetching = false;
      state.category.categories = action.payload;
      state.category.error = false;
    },
    getCategoryFailed: (state) => {
      state.category.isFetching = false;
      state.category.allQuestion = null;
      state.category.error = true;
    },
  },
});

export const { getCategoryStart, getCategorySuccess, getCategoryFailed } = categorySlice.actions;
export default categorySlice.reducer;
