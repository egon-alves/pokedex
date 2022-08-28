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
    margin: 0;
    padding: 20;
    transition: ${({ theme }) => theme.transition};
  }

  .cards-name{
    color: black;
  }
  .cards {
    border:${({ theme }) => theme.bd};
  }
button {
  animation-name: test;
  animation-duration: 1s;
  
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

// @keyframes test {
//   from {width: 110px;
//   height:100px}
//   to {width: 110px;
//     height:300px}
// }
`;

