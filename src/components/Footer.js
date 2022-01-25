import React, { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

export default function Footer() {
  const [quizState, dispatch] = useContext(QuizContext);
  const nbrQuestions = quizState.data.length;
  return (
    <div>
      <p>
        {quizState.currentQuestion} of {nbrQuestions} Questions
      </p>
      <button>Next Question</button>
    </div>
  );
}
