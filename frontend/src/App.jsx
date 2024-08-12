import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomeScreen from "./components/WelcomeScreen";
import QuizScreen from "./components/QuizScreen";
import ScoreScreen from "./components/ScoreScreen";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<WelcomeScreen />} />
      <Route path="/quiz" element={<QuizScreen />} />
      <Route path="/score" element={<ScoreScreen />} />
    </Routes>
  </Router>
);

export default App;
