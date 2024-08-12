import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedTags: [],
};

const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    selectTag: (state, action) => {
      if (state.selectedTags.length < 10) {
        state.selectedTags.push(action.payload);
      }
    },
    resetTags: (state) => {
      state.selectedTags = [];
    },
  },
});

export const { selectTag, resetTags } = tagsSlice.actions;
export default tagsSlice.reducer;
