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

 .diary-box {
    box-shadow: ${({ theme }) => theme.boxShadow};
 }

 .diary-box:active {
    box-shadow: ${({ theme }) => theme.insetBoxShadow};
 }

 .diary-detail-container {
    background-color:${({ theme }) => theme.detailBgColor};
 }

 .backspace-button {
    background-color:${({ theme }) => theme.bgColor};
    color:${({ theme }) => theme.color};
 }
 
 .footer-text {
    color:${({ theme }) => theme.color};

 }

 .diary-home-btn:hover {
   color:${({ theme }) => theme.hoverColor};

 }
 
`;
