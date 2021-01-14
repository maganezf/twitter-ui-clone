import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    color: var(--white);
  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;

    width: 100%;
    height: 100%;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, Arial, sans-serif;
  }

  html {
    background: var(--primary);
  }

  :root {
    --primary: #15202B;
    --secondary: #192734;
    --search: #253341;
    --white: #FFFFFF;
    --gray: #8899A6;
    --outline: #38444D;
    --retweet: #17BF63;
    --like: #E0245E;
    --twitter: #1DA1F2;
    --twitter-dark-hover: #152C3F;
    --twitter-light-hover: #1a91da;
  }
`;
