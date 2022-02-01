import { createGlobalStyle } from "styled-components";
import harry from "../assets/harrypotter.jpg";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    box-sizing: border-box;
    background: url(${harry}) no-repeat left center fixed; 
    background-size: cover;
    font-family: sans-serif;
  }
`;
