import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::after,
  *::before {
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: ${({ theme }) => theme.transition};
  }

 
  .cards {
    border:${({ theme }) => theme.bd};
  }
button {

  
  background: ${({ theme }) => theme.body2} ;
  color:${({ theme }) => theme.text2} ;
  transition:all 12.15s linear;
  font-size:bold;
  font-weight: bold;
}


.cards:hover, button:hover {
  box-shadow: ${({ theme }) => theme.bx};
  transition: all .1s linear;
}
.cards p {
  background: ${({ theme }) => theme.body2};
  color: ${({ theme }) => theme.text2};

}

`;

