import React from "react";
import { useContext } from "react/cjs/react.development";
import { QuizContext } from "../context/QuizContext";
import { QuizStyled } from "./Quiz.styled";
import { ButtonStyled } from "../shared/Button.styled";

export default function Score() {
  const [quizState, dispatch] = useContext(QuizContext);
  const score = quizState.score;
  const nbrQuestions = quizState.data.length;

  const restart = () => {
    dispatch({ type: "RESTART" });
  };

  return (
    <QuizStyled>
      <h2>
        Results : {score} / {nbrQuestions} !
      </h2>
      <ButtonStyled mg="30px auto 0" onClick={restart}>
        Try Again
      </ButtonStyled>
    </QuizStyled>
  );
}
