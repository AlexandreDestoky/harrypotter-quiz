import React, { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import { QuestionStyled } from "./QuestionStyled";

export default function Question() {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.data[quizState.currentQuestion - 1].question;
  
  return <QuestionStyled>{quizState.currentQuestion}.{currentQuestion}</QuestionStyled>;
}
