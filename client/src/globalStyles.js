import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   body {
  margin: 0 auto;
  max-width: 1400px;
  font-family: "Lexend", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #f5f6fa;
  padding: 20px 80px;
    @media only screen and (max-width: 800px){
      padding: 15px 20px;
    }
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

*,
::before,
::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

html {
  box-sizing: border-box;
}
`;
