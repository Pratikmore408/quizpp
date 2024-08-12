import { configureStore } from "@reduxjs/toolkit";
import tagsReducer from "./tagsSlice";
import quizReducer from "./quizSlice";

export const store = configureStore({
  reducer: {
    tags: tagsReducer,
    quiz: quizReducer,
  },
});
