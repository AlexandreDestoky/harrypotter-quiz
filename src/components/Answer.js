import React, { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import { AnswerListStyled, AnswerStyled } from "./AnswerStyled";

export default function Answer() {
  const [quizState, dispatch] = useContext(QuizContext);
  const questions = quizState.data[quizState.currentQuestion - 1].answerOptions;
  return (
    <AnswerListStyled>
      {questions.map((el, i) => (
        <AnswerStyled key={i}>{el.answerText}</AnswerStyled>
      ))}
    </AnswerListStyled>
  );
}
