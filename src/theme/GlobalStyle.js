import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  ${normalize}
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: Times New Roman, serif;
  }
  /* Full height layout */ 
    html, body {
    display: flex;
    min-height: 100vh;
    width: 100%;
  }
  #root {
    width: 100%
  }
`;

export default GlobalStyle