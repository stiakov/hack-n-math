import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import { light, lightMedium } from '../assets/colors';

const wrapper = css`
  display: flex;
  flex-flow: column nowrap;
`;

const numLinkStyle = css`
  text-decoration: none;
  color: {lightMedium};
  font-size: 0.6rem;
  line-height: 1.4rem;
  :hover {
    color: ${light};
    font-weight: bold;
  }
`;

const linkStyle = css`
  font-family: 'Odibee Sans', 'Andale Mono', 'monospace';
  font-size: 0.8rem;
  text-decoration: none;
  color: ${lightMedium};
  display: flex;
  align-items: center;
  margin: 1px 0 1px 0;
  letter-spacing: .03rem;
  stroke: ${lightMedium};
  :visited {
    color: ${lightMedium};
  }
  :hover {
    color: ${light};
    font-weight: bold;
    stroke: ${light};
    stroke-width: 1.5;
  }

  &.current-page {
    color: ${light} !important;
    font-weight: bold;
    stroke: ${light};
    stroke-width: 1.5;
  }
`;

const lineStyle = css`
  display: flex;
  align-items: center;
  margin: auto .5rem auto .5rem;
`;

const HorizontalLine = () => (
  <svg height={1} width={25} css={lineStyle}>
    <line x1={0} y1={0} x2={25} y2={0} css={lineStyle} />
  </svg>
);

const LinkItem = ({ path, number, text }) => (
  <Link css={linkStyle} to={`/${path}`} activeClassName="current-page">
    <small css={numLinkStyle}>
      {number}
    </small>
    <HorizontalLine />
    {text}
  </Link>
);

const NavLinks = () => (
  <nav css={wrapper} id="desktop-nav">
    <LinkItem path="who" number="00" text="WHO" />
    <LinkItem path="" number="01" text="PORTFOLIO" />
    <LinkItem path="contact" number="02" text="CONTACT" />
    <LinkItem path="blog" number="03" text="BLOG" />
  </nav>
);

LinkItem.propTypes = {
  path: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NavLinks;
