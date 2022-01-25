import React, { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import { ButtonStyled } from "../shared/Button.styled";
import { FooterStyled } from "./Footer.styled";

export default function Footer() {
  const [quizState, dispatch] = useContext(QuizContext);
  const nbrQuestions = quizState.data.length;
  const currentAnswer = quizState.currentAnswer;
  const btnText = quizState.currentQuestion < nbrQuestions ? "Next Question" : "See Results";

  const nextQuestion = () => {
    if (quizState.currentQuestion < nbrQuestions) {
      dispatch({ type: "NEXT" });
    } else {
      dispatch({ type: "FINISH" });
    }
  };

  return (
    <FooterStyled>
      <p>
        {quizState.currentQuestion} of {nbrQuestions} Questions
      </p>
      {currentAnswer && (
        <ButtonStyled fs="1rem" mg="0" onClick={nextQuestion}>
          {btnText}
        </ButtonStyled>
      )}
    </FooterStyled>
  );
}
