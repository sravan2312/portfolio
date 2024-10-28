// src/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';
import bannerImage from '../assets/img/header-img.svg'; // Adjust path based on image location


const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    background-image: url(${bannerImage});
    background-size: 35%;
    background-position: right;
    background-repeat: no-repeat;
    background-attachment: fixed;
    color: #333;
    line-height: 1.6;
  }
`;

export default GlobalStyles;
