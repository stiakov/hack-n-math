import { css } from '@emotion/core';

const mediaQuery = {
  desktop: () => (css`
    @media only screen and (min-width: 801px) {
      body {
        margin: 5rem !important;
      }
      .content {
        flex-flow: row wrap !important;
      }
      #mobile-nav {
        display: none;
      }
      #desktop-nav {
        display: block;
      }
    }
    `),
  mobile: () => (css`
     @media only screen and (max-width: 800px) {
       body {
        margin: 1.5rem !important;
      }
      .content {
        flex-flow: column nowrap !important;
      }
      .navigator,
      .main-container {
        min-width: calc(100vw - 3rem);
      }
      #mobile-nav {
        display: flex;
      }
      #desktop-nav {
        display: none;
      }
    }
  `),
};

export default mediaQuery;
