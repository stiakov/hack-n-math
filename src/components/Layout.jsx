import React from 'react';
import PropTypes from 'prop-types';
import { Global, css } from '@emotion/core';
import Helmet from 'react-helmet';
import NavLinks from './NavLinks';
import useSiteMetadata from '../hooks/use-sitemetadata';
import {
  light,
  lightMedium,
  dark,
} from './colors';

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <Global
        styles={css`
            @import url("https://fonts.googleapis.com/css?family=Cabin|Odibee+Sans|Source+Sans+Pro&display=swap");

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
              background-color: ${dark};
              color: ${lightMedium};
              font-family: "Source Sans Pro";
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
              font-family: 'Cabin';
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
          `}
      />
      <Helmet>
        <html lang="en" />
          <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <main>{children}</main>
      <NavLinks />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
