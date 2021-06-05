import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`
  ${'' /* * {
    outline: 3px solid green;
  } */}

  html {
    font-size: 100%;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  a,
  a:visited,
  a:hover {
    text-decoration: none;
  }

  li,
  li a {
    text-decoration: none;
    list-style: none
  }

  ${'' /* body {
    background-color: red;
  } */}
`;


export default GlobalStyles;