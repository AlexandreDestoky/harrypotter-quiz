import React, { createContext, useReducer } from "react";
import dataQuiz from "../dataQuiz"

const initialState = {
  data :dataQuiz,
  currentQuestion : 1
};

const reducer= (state , action) => {
  switch (action.type) {
    case "TEST":
      console.log("test");
      return {...state,prenom:"Patrick"};

    default:
      return state;
  }
};




export const QuizContext = createContext();

export default function QuizContextProvider(props) {

  const value = useReducer(reducer, initialState);

  return( 
  <QuizContext.Provider value={value}>
    {props.children}
  </QuizContext.Provider>
  );
}
