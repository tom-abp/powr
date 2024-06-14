import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html,body{
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.background.body};
    font-size: ${({ theme }) => theme.sizing[5]}
  }
  *{
    margin: 0;
    padding: 0;
  }
`;
