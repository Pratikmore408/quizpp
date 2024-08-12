import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for the quiz
const initialState = {
  questions: [],
  currentQuestion: 0,
  score: 0,
};

// Create the quiz slice
const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    // Set questions in the state
    setQuestions: (state, action) => {
      state.questions = action.payload; // Expect payload to be an array of questions
    },
    // Move to the next question
    nextQuestion: (state) => {
      state.currentQuestion += 1; // Increment the current question index
    },
    // Update the score
    updateScore: (state, action) => {
      // Ensure payload is a number
      if (typeof action.payload === "number") {
        state.score += action.payload;
      } else {
        console.error("Payload for updateScore should be a number");
      }
    },
  },
});

// Export the action creators
export const { setQuestions, nextQuestion, updateScore } = quizSlice.actions;

// Export the reducer
export default quizSlice.reducer;
