import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    
  }
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    scroll-behavior: smooth; 
  }
  body {
    margin: 0px;
    padding: 0px;
    font-size: 1rem;
    
  }
  
  h1, h2, h3, h4, ul, li, p, a, span, button {
    margin: 0px;
    padding: 0px;
    font-size: 1rem;
    text-decoration: none;
    list-style: none;
  }
  img {
    max-width: 100%;
  }
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #000;
    border-radius: 5px;
}
`;

export default GlobalStyle;
