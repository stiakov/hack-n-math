import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import {
  light,
  lightMedium,
  dark,
  black,
} from '../assets/colors';

const styles = css`
  background-color: ${light};
  color: ${dark};
  min-width: 100vw;
  margin: 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  text-align: center;
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  transition: top 0.3s;
`;

const linkStyle = css`
  font-family: 'Odibee Sans', 'Andale Mono', 'monospace';
  font-size: 0.8rem;
  text-decoration: none;
  color: ${dark};
  margin: 1px 0 1px 0;
  letter-spacing: .03rem;
  :visited {
    color: ${lightMedium};
  }
  :hover {
    color: ${light};
    font-weight: bold;
  }

  &.current-page {
    color: ${black} !important;
    font-weight: bold;
  }
`;

const LinkItem = ({ path, text }) => (
  <Link css={linkStyle} to={`/${path}`} activeClassName="current-page">
    {text}
  </Link>
);

let prevScrollpos = window.pageYOffset;
window.onscroll = () => {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('mobile-nav').style.top = '0';
  } else {
    document.getElementById('mobile-nav').style.top = '-50px';
  }
  prevScrollpos = currentScrollPos;
};

const MobileNav = () => {
  return (
    <div css={styles} className="mobile-nav" id="mobile-nav">
      <LinkItem path="who" text="WHO" />
      <LinkItem path="" text="PORTFOLIO" />
      <LinkItem path="contact" text="CONTACT" />
      <LinkItem path="blog" text="BLOG" />
    </div>
  );
};

export default MobileNav;
