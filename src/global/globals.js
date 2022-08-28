import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::after,
  *::before {
   
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
   
    transition: all 0.25s linear;
  }
`;
