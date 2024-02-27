import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

const GlobalStyle = createGlobalStyle`

:root{
    --primaryWhite: #FFFFFF;
    --primaryBlack: #121417;
    --primaryGrey: #F8F8F8;
    --primaryYellow: #F4C550;
    --secondaryGrey: #8A8A89;
    --secondaryYellow: #FBE9BA;
    --secondaryGreen: #38CD3E;

    --animationCubicBezier: cubic-bezier(0.7, 0.98, 0.86, 0.98);
}

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

export default GlobalStyle;
