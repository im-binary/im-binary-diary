import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 body {
    max-width: 1000px;
    min-width: 255px;
    margin: 0 auto;
    background-color:${({ theme }) => theme.bgColor};
    color:${({ theme }) => theme.color};
 }

 header, .app-container section {
    color:${({ theme }) => theme.color};
 }

 .diary-detail-container {
   background-color:${({ theme }) => theme.detailBgColor};
 }
 
 .footer-text {
   color:${({ theme }) => theme.color};

 }
 
`;
