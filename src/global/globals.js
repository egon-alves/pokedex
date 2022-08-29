import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }

  .cards-name {
    color: ${({ theme }) => theme.text2};
  }
`;
