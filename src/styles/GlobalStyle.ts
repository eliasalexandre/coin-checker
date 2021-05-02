import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;200;300;400;500;600;700&family=Inter:wght@100;200;300&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary: #121212;
    --secondary: #1B1F23;
    --tertiary: #191622;
  }

  @media (min-width: 1080px) {
    html {
      font-size: 93.75%; // 15px
    }
  }
  @media (min-width: 720px) {
    html {
      font-size: 87.5%; // 14px
    }
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    color: #E1E1E6;
  }
`;
