import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::after,
  *::before {
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text1};
    transition: ${({ theme }) => theme.transition};
  }

 
  .cards {
    border:${({ theme }) => theme.bd};
    color:${({ theme }) => theme.text2} ;
  }

  .theme {
    
    color:${({ theme }) => theme.text} ;
    transition:all .15s linear;
    font-size:bold;
    font-weight: bold;
  }


.cards:hover, button:hover {
  box-shadow: ${({ theme }) => theme.bx};
  transition: all .1s linear;
}
.cards p {
  background: ${({ theme }) => theme.body2};
  color: ${({ theme }) => theme.text};

}


.box {
  background: ${({ theme }) => theme.body} ;
  border:${({ theme }) => theme.bd};
}
`;

