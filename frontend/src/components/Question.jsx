import React from "react";

const Question = ({ question, onAnswer }) => {
  return (
    <div>
      <h3>{question.text}</h3>
      {question.options.map((option, idx) => (
        <button key={idx} onClick={() => onAnswer(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default Question;
