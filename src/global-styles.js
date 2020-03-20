import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  html {
    box-sizing: border-box;
    font-size: 62.5%;

  width: 100vw;
  height: 100vh;
  }
  body {
    font-family: "Open Sans Condensed", sans-serif;
    background-color: #f6f6f6;
    overflow: hidden;
  }
`;
