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
    position: fixed;
    top: 35%; /* Positioned on the right side */
    left: 85%;
    width: 300px;
    height: 300px;
    background-image: url(${bannerImage});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    transform: translate(-50%, -50%) rotate(0deg);
    animation: spin 20s linear infinite;
    z-index: -100;
    opacity: 0.9;
    pointer-events: none;
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

  /* Media queries for mobile responsiveness */
  @media (max-width: 768px) {
    body {
      font-size: 0.9rem; /* Slightly smaller font size */
    }

    body::after {
      top: 50%; /* Adjust the background image position */
      left: 90%; /* Push it further to the edge */
      width: 200px; /* Reduce size for mobile */
      height: 200px;
      opacity: 0.7; /* Slightly reduce opacity for better readability */
    }
  }

  @media (max-width: 480px) {
    body {
      font-size: 0.8rem;
    }

    body::after {
      top: 60%;
      left: 95%;
      width: 150px; /* Further reduce size for very small screens */
      height: 150px;
      opacity: 0.6;
    }
  }
`;

export default GlobalStyles;
