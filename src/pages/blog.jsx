import React from 'react';
import Layout from '../components/Layout';

const title = 'Digital Blog';
const description = 'Since 2017.';

const BlogIndex = () => (
  <h1>From Blog Index</h1>
);

const Blog = () => {
  return (
    <Layout dataHeader={{ title, description }} dataMain={<BlogIndex />} />
  );
};

export default Blog;
