import { useContext } from "react";
import "./App.css";
import Quiz from "./components/Quiz";
import { QuizContext } from "./context/QuizContext";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);
  console.log(quizState);
  return (
    <div className="App">
      <Quiz />
    </div>
  );
}

export default App;
