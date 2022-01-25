import React, { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import { QuestionStyled } from "./Question.styled";

export default function Question() {
  const [quizState] = useContext(QuizContext);
  const currentQuestion = quizState.data[quizState.currentQuestion - 1].question;

  return (
    <QuestionStyled>
      {quizState.currentQuestion}. {currentQuestion}
    </QuestionStyled>
  );
}
