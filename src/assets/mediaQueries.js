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
    }
  `),
}

export default mediaQuery;