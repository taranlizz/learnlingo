import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
     body {
    color: #121417;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  img {
    display: block;
    max-width: 100%;
    object-fit: cover;
  }

  p, h1, h2{
    margin: 0;
  }
`;

export default GlobalStyles;
