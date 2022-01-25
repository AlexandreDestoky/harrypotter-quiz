import React, { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import Answer from "./Answer";
import Footer from "./Footer";
import Question from "./Question";
import { QuizStyled } from "./Quiz.styled";
export default function Quiz() {

  return (
    <QuizStyled>
      <Question/>
      <Answer/>
      <Footer/>
    </QuizStyled>
  );
}
