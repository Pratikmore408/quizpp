// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { nextQuestion, setQuestions, updateScore } from "../redux/quizSlice";
// import useTimer from "../hooks/useTimer";

// const QuizScreen = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const selectedTags = useSelector((state) => state.tags.selectedTags);
//   const questions = useSelector((state) => state.quiz.questions);
//   const currentQuestionIndex = useSelector(
//     (state) => state.quiz.currentQuestion
//   );
//   const [question, setQuestion] = useState(null);
//   const [filteredQuestions, setFilteredQuestions] = useState([]);
//   const timer = useTimer(30, () => dispatch(nextQuestion()));

//   // Fetch and set questions from the server
//   useEffect(() => {
//     const fetchQuestions = async () => {
//       try {
//         const response = await fetch("http://127.0.0.1:5000/api/quiz");
//         const data = await response.json();
//         dispatch(setQuestions(data)); // Store all questions in Redux
//       } catch (error) {
//         console.error("Failed to fetch questions", error);
//       }
//     };

//     fetchQuestions();
//   }, [dispatch]);

//   // Filter questions based on selected tags
//   useEffect(() => {
//     if (questions.length > 0) {
//       const matchedQuestions = questions.filter((q) =>
//         q.tags.some((tag) => selectedTags.includes(tag))
//       );
//       setFilteredQuestions(matchedQuestions.slice(0, 10)); // Show only 10 questions
//     }
//   }, [questions, selectedTags]);

//   // Update question state based on the current question index
//   useEffect(() => {
//     if (
//       filteredQuestions.length > 0 &&
//       currentQuestionIndex < filteredQuestions.length
//     ) {
//       setQuestion(filteredQuestions[currentQuestionIndex]);
//     }
//   }, [filteredQuestions, currentQuestionIndex]);

//   // Handle answer selection
//   const handleAnswer = (selectedOptions) => {
//     if (!question) return;

//     let scoreChange = 0;
//     if (question.type === "single") {
//       scoreChange = selectedOptions[0] === question.correctOptions[0] ? 4 : -2;
//     } else {
//       selectedOptions.forEach((option) => {
//         if (question.correctOptions.includes(option)) {
//           scoreChange += 1;
//         } else {
//           scoreChange -= 1;
//         }
//       });
//       if (selectedOptions.length === question.correctOptions.length) {
//         scoreChange += 3; // Additional points for fully correct
//       }
//     }
//     dispatch(updateScore(scoreChange));
//     dispatch(nextQuestion());
//     timer.reset(); // Reset timer to 30 seconds after answering
//   };

//   // Navigate to score screen when all questions are completed
//   useEffect(() => {
//     if (
//       filteredQuestions.length > 0 &&
//       currentQuestionIndex >= filteredQuestions.length
//     ) {
//       navigate("/score");
//     }
//   }, [currentQuestionIndex, filteredQuestions.length, navigate]);

//   return (
//     <div>
//       {question ? (
//         <>
//           <h2>{question.text}</h2>
//           <div>
//             {question.options.map((option, idx) => (
//               <button key={idx} onClick={() => handleAnswer([option])}>
//                 {option}
//               </button>
//             ))}
//           </div>
//           <p>Time left: {timer.time} seconds</p>
//         </>
//       ) : (
//         <p>Loading question...</p>
//       )}
//     </div>
//   );
// };

// export default QuizScreen;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { nextQuestion, setQuestions, updateScore } from "../redux/quizSlice";
import useTimer from "../hooks/useTimer";

const QuizScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedTags = useSelector((state) => state.tags.selectedTags);
  const questions = useSelector((state) => state.quiz.questions);
  const currentQuestionIndex = useSelector(
    (state) => state.quiz.currentQuestion
  );
  const [question, setQuestion] = useState(null);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const timer = useTimer(30, () => dispatch(nextQuestion()));

  // Fetch and set questions from the server
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/api/quiz");
        const data = await response.json();
        dispatch(setQuestions(data)); // Store all questions in Redux
      } catch (error) {
        console.error("Failed to fetch questions", error);
      }
    };

    fetchQuestions();
  }, [dispatch]);

  // Filter questions based on selected tags
  useEffect(() => {
    if (questions.length > 0) {
      const matchedQuestions = questions.filter((q) =>
        q.tags.some((tag) => selectedTags.includes(tag))
      );
      setFilteredQuestions(matchedQuestions.slice(0, 10)); // Show only 10 questions
    }
  }, [questions, selectedTags]);

  // Update question state based on the current question index
  useEffect(() => {
    if (
      filteredQuestions.length > 0 &&
      currentQuestionIndex < filteredQuestions.length
    ) {
      setQuestion(filteredQuestions[currentQuestionIndex]);
    }
  }, [filteredQuestions, currentQuestionIndex]);

  // Handle answer selection
  const handleAnswer = (selectedOptions) => {
    if (!question) return;

    let scoreChange = 0;
    if (question.type === "single") {
      scoreChange = selectedOptions[0] === question.correctOptions[0] ? 4 : -2;
    } else {
      selectedOptions.forEach((option) => {
        if (question.correctOptions.includes(option)) {
          scoreChange += 1;
        } else {
          scoreChange -= 1;
        }
      });
      if (selectedOptions.length === question.correctOptions.length) {
        scoreChange += 3; // Additional points for fully correct
      }
    }
    dispatch(updateScore(scoreChange));
    dispatch(nextQuestion());
    timer.reset(); // Reset timer to 30 seconds after answering
  };

  // Navigate to score screen when all questions are completed
  useEffect(() => {
    if (
      filteredQuestions.length > 0 &&
      currentQuestionIndex >= filteredQuestions.length
    ) {
      navigate("/score");
    }
  }, [currentQuestionIndex, filteredQuestions.length, navigate]);

  return (
    <div>
      {question ? (
        <>
          <h2>{question.text}</h2>
          <div>
            {question.options.map((option, idx) => (
              <button key={idx} onClick={() => handleAnswer([option])}>
                {option}
              </button>
            ))}
          </div>
          <p>Time left: {timer.time} seconds</p>
        </>
      ) : (
        <p>Loading question...</p>
      )}
    </div>
  );
};

export default QuizScreen;
