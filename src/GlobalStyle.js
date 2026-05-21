import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    background: #f5f5f5;
    color: #222;
    font-family: sans-serif;
    min-height: 100vh;
  }
`;

export default GlobalStyle;