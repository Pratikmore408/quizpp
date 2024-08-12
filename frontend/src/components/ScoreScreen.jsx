import React from "react";
import { useSelector } from "react-redux";

const ScoreScreen = () => {
  const score = useSelector((state) => state.quiz.score);

  return (
    <div>
      <h1>Your Score: {score}</h1>
    </div>
  );
};

export default ScoreScreen;
