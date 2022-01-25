import React, { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import Answer from "./Answer";
import { AnswerList } from "./Answer.styled";
import Footer from "./Footer";
import Question from "./Question";
import { QuizStyled } from "./Quiz.styled";
import Score from "./Score";

export default function Quiz() {
  const [quizState] = useContext(QuizContext);
  const currentData = quizState.data[quizState.currentQuestion - 1];
  const answers = currentData.answerOptions;
  const isFinish = quizState.isFinish;

  return (
    <>
      {!isFinish && (
        <QuizStyled>
          <Question />
          <AnswerList>
            {answers.map((answer, i) => (
              <Answer key={i}>{answer}</Answer>
            ))}
          </AnswerList>
          <Footer />
        </QuizStyled>
      )}
      {isFinish && <Score />}
    </>
  );
}
