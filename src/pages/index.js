import React from 'react';
import { css } from '@emotion/core';
import Layout from '../components/Layout';

const nameStyle = css`
  text-decoration: none;
  color: #8c8c8c;
  font-size: 3rem;
  font-weight: bold;
`;

const descriptionStyle = css`
  text-decoration: none;
  color: #404040;
  font-family: Cabin;
`;

const Index = () => (
  <Layout>
    <h1 css={nameStyle}>Santiago Torres</h1>
    <h3 css={descriptionStyle}>
      Full-Stack Web Developer Ipsum officia quis labore ipsum exercitation
      esse laborum ipsum velit mollit esse est dolore. Elit reprehenderit elit
      veniam cillum sunt consequat adipisicing. Eu consequat excepteur laboris
      non aliqua. Dolore deserunt nulla magna laboris Lorem.
    </h3>
  </Layout>
);

export default Index;
