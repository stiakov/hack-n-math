import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Global, css } from '@emotion/core';
import Prism from 'prismjs';
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
  useEffect(() => Prism.highlightAll());

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
