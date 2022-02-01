import React, { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import { AnswerStyled } from "./Answer.styled";

export default function Answer(props) {
  const [quizState, dispatch] = useContext(QuizContext);

  const choice = () => {
    dispatch({ type: "CHOICE", payload: props.children });
  };

  const currentCorrectAnswer = quizState.data[quizState.currentQuestion - 1].correctAnswer;
  const correctAnswer = quizState.currentAnswer && props.children === currentCorrectAnswer;
  const wrongAnswer =
    props.children !== currentCorrectAnswer && quizState.currentAnswer === props.children;

  const disabled = quizState.currentAnswer ? "disabled" : "";
  const correctAnswerClass = correctAnswer ? "correct" : "";
  const wrongAnswerClass = wrongAnswer ? "incorrect" : "";

  return (
    <AnswerStyled
      onClick={choice}
      className={`${correctAnswerClass} ${wrongAnswerClass} ${disabled}`}
    >
      {props.children}
    </AnswerStyled>
  );
}
