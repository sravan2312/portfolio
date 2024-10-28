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
    color: #333;
    line-height: 1.6;
    background: linear-gradient(120deg, #ffcc70, #fdfbde, #d4fc79, #ffffff); /* Gradient background */
    background-size: 400% 400%;
    animation: gradientShift 10s ease infinite;
    position: relative;
  }

  /* Spinning background image as a pseudo-element */
  body::after {
    content: '';
    position: fixed; /* Fixed to stay in the same position on scroll */
    top: 35%; /* Positioned on the right side */
    left: 85%;
    width: 300px; /* Adjust size as needed */
    height: 300px; /* Adjust size as needed */
    background-image: url(${bannerImage});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    transform: translate(-50%, -50%) rotate(0deg);
    animation: spin 20s linear infinite;
    z-index: -100; /* Ensure it stays in the background */
    opacity: 0.9; /* Optional: Adjust opacity */
    pointer-events: none; /* Prevent interference with scrolling or interaction */
  }

  /* Keyframes for spinning */
  @keyframes spin {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  /* Keyframes for background gradient shift */
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

export default GlobalStyles;
