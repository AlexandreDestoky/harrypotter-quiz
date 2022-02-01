import React, { createContext, useReducer } from "react";
import dataQuiz from "../shared/dataQuiz";

const initialState = {
  data: dataQuiz,
  currentQuestion: 1,
  currentAnswer: "",
  score: 0,
  isFinish: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHOICE":
      let score = state.score;
      if (action.payload === state.data[state.currentQuestion - 1].correctAnswer) score++;
      return { ...state, currentAnswer: action.payload, score };
    case "NEXT":
      return { ...state, currentQuestion: state.currentQuestion + 1, currentAnswer: "" };
    case "FINISH":
      return { ...state, isFinish: true };
    case "RESTART":
      return { ...initialState };
    default:
      return state;
  }
};

export const QuizContext = createContext();

export default function QuizContextProvider(props) {
  const value = useReducer(reducer, initialState);

  return <QuizContext.Provider value={value}>{props.children}</QuizContext.Provider>;
}
