import { Application } from "./App.styled";
import Quiz from "./components/Quiz";
import { GlobalStyle } from "./shared/GlobalStyle";

function App() {
  return (
    <Application>
      <Quiz />
      <GlobalStyle />
    </Application>
  );
}

export default App;
