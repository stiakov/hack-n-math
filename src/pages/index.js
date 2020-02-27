import React from 'react';
import Layout from '../components/Layout';

const title = 'Santiago Torres';
const description = 'Full-Stack Web Developer Ipsum officia quis labore ipsum exercitation esse laborum ipsum velit mollit esse est dolore. Elit reprehenderit elit veniam cillum sunt consequat adipisicing.';

const ContentIndex = () => (
  <>
    <h1>CONTENT INDEX</h1>
    <h1>CONTENT INDEX</h1>
    <h1>CONTENT INDEX</h1>
    <h1>CONTENT INDEX</h1>
    <h1>CONTENT INDEX</h1>
    <h1>CONTENT INDEX</h1>
    <h1>CONTENT INDEX</h1>
    <h1>CONTENT INDEX</h1>

  </>
);
const Index = () => (
  <Layout dataHeader={{ title, description }}>
    <ContentIndex />
  </Layout>
);

export default Index;
