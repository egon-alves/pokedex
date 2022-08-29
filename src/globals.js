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
  }

  }
  .cards {
    border:${({ theme }) => theme.bd};
    color: ${({ theme }) => theme.text};
  
.cards-name {
  color: ${({ theme }) => theme.text2};
  font-size: 1.2em;
  font-weight: bold;
}




.cards:hover, button:hover {
  box-shadow: ${({ theme }) => theme.bx};
  transition: all 1.1s linear;
}
.cards p {
  background: ${({ theme }) => theme.body2};
  color: ${({ theme }) => theme.text2};

}

`;

