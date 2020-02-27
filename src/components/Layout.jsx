import React from 'react';
import PropTypes from 'prop-types';
import { Global, css } from '@emotion/core';
import Helmet from 'react-helmet';
import Header from './Header';
import useSiteMetadata from '../hooks/use-sitemetadata';
import {
  light,
  lightMedium,
  dark,
} from '../assets/colors';
import mediaQuery from '../assets/mediaQueries';
import MobileNav from './MobileNav';


const Layout = ({ dataHeader, children }) => {

  const { title, description } = useSiteMetadata();
  return (
    <>
      <Global
        styles={css`
            @import url("https://fonts.googleapis.com/css?family=Cabin|Odibee+Sans|Source+Sans+Pro&display=swap");
            ${mediaQuery.desktop()}
            ${mediaQuery.mobile()}

            * {
              box-sizing: border-box;
              margin: 0;
            }

            * + * {
              margin-top: 1rem;
            }

            html,
            body {
              display: flex;
              margin: 0;
              background-color: ${dark};
              color: ${lightMedium};
              font-family: 'Source Sans Pro', 'Andale Mono', 'monospace';
              font-size: 18px;
              line-height: 1.4;
              text-rendering: optimizeLegibility !important;
              -webkit-font-smoothing: antialiased !important;
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
              color: ${light};
              font-family: 'Cabin', 'Helvetica', 'sans-serif';
              line-height: 1.1;

              + * {
                margin-top: 0.5rem;
              }

              strong {
                color: ${light};
              }

              li {
                margin-top: 0.25rem;
              }
            }
            .content {
              display: flex;
              flex-flow: row wrap;
              justify-content: space-around
            }
            .navigator {
              max-width: 39vw;
            }
            .main-container {
              max-width: 59vw;
            }

            .gatsby-highlight {
              background-color: #1d1f21;
              border-radius: 0.3em;
              margin: 0.5em 0;
              padding: 1em;
              overflow: auto;
            }

            .gatsby-highlight pre[class*="language-"].line-numbers {
              padding: 0;
              padding-left: 2.8em;
              overflow: initial;
            }

            .gatsby-highlight {
              background-color: #fdf6e3;
              border-radius: 0.3em;
              margin: 0.5em 0;
              padding: 1em;
              overflow: auto;
            }
            
            .gatsby-highlight pre[class*="language-"] {
              background-color: transparent;
              margin: 0;
              padding: 0;
              overflow: initial;
              float: left; /* 1 */
              min-width: 100%; /* 2 */
            }
            .gatsby-highlight-code-line {
              background-color: #feb;
              display: block;
              margin-right: -1em;
              margin-left: -1em;
              padding-right: 1em;
              padding-left: 0.75em;
              border-left: 0.25em solid #f99;
            }
            .gatsby-highlight pre[class*="language-"].line-numbers {
              padding-left: 2.8em;
            }

            /**
            * If you only want to use line numbering
            */

            .gatsby-highlight {
              background-color: #fdf6e3;
              border-radius: 0.3em;
              margin: 0.5em 0;
              padding: 1em;
              overflow: auto;
            }

            .gatsby-highlight pre[class*="language-"].line-numbers {
              padding: 0;
              padding-left: 2.8em;
              overflow: initial;
            }
            .command-line-prompt > span:before {
              color: #999;
              content: " ";
              display: block;
              padding-right: 0.8em;
            }

            /* Prompt for all users */
            .command-line-prompt > span[data-user]:before {
              content: "[" attr(data-user) "@" attr(data-host) "] $";
            }

            /* Prompt for root */
            .command-line-prompt > span[data-user="root"]:before {
              content: "[" attr(data-user) "@" attr(data-host) "] #";
            }

            .command-line-prompt > span[data-prompt]:before {
              content: attr(data-prompt);
            }
          `}
      />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <MobileNav />
      <div className="content">
        <Header className="navigator" data={dataHeader} />
        <main className="main-container">{children}</main>
      </div>
    </>
  );
};

Layout.propTypes = {
  dataHeader: PropTypes.node,
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  dataHeader: {
    title: 'title default',
    description: 'Description default.',
    extra: 'extra default.',
  },
};

export default Layout;
