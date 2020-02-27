import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import NavLinks from './NavLinks';

const nameStyle = css`
  text-decoration: none;
  color: #8c8c8c;
  font-size: 3rem;
  font-weight: bold;
`;

const descriptionStyle = css`
  text-decoration: none;
  color: #404040;
  font-family: 'Cabin', 'Helvetica', 'sans-serif';
`;

const Header = ({ data }) => (
  <div className="navigator">
    <h1 css={nameStyle}>{data.title}</h1>
    <h3 css={descriptionStyle}>
      {data.description}
    </h3>
    <NavLinks />
  </div>
);

Header.propTypes = {
  data: PropTypes.node.isRequired,
};

export default Header;
