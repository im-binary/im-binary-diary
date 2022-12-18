import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 :root {
  font-size: 10px;
 }

 body {
  font-family: "Jua", sans-serif;
  max-width: 1000px;
  min-width: 255px;
  margin: 0 auto;
  background-color:${({ theme }) => theme.bgColor};
  color:${({ theme }) => theme.color};
 }

 @keyframes skeleton-gradient {
    0% {
      background-color: rgba(165, 165, 165, 0.1);
    }

    50% {
      background-color: rgba(165, 165, 165, 0.3);
    }

    100% {
      background-color: rgba(165, 165, 165, 0.1);
    }
  }

  @keyframes flow {
    from {
      transform: translate(-40%, 0);
    }
    to {
      transform: translate(40%, 0);
    }

    0% {
      opacity: 0.6;
    }
    25% {
      opacity: 0.8;
    }
    50% {
      opacity: 1;
    }
    75% {
      opacity: 0.8;
    }
    100% {
      opacity: 0.6;
    }
  }
`;
