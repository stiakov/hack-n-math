import React from "react"
import { Global, css } from "@emotion/core"

const Layout = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css?family=Cabin|Source+Sans+Pro&display=swap');

          * {
            box-sizing: border-box;
            margin: 0;
          }

          * + * {
            margin-top: 1rem;
          }

          html,
          body {
            margin: 0;
            color: #555;
            font-family: "Source Sans Pro";
            font-size: 18px;
            line-height: 1.4
              /* Remove margin from main div that gastby mount into */
            > div {
              margin-top: 0;
            }
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: #222;
            font-family: "Cabin";
            line-height: 1.1;

            + * {
              margin-top: 0.5rem;
            }

            strong {
              color: #222;
            }

            li {
              margin-top: 0.25rem;
            }
          }
        `}
      />
      <header></header>
      <main>{children}</main>
    </>
  )
}
export default Layout
