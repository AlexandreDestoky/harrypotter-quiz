import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import QuizContextProvider from "./context/QuizContext";

ReactDOM.render(
  <QuizContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </QuizContextProvider>,
  document.getElementById("root")
);
