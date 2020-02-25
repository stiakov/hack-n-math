import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';

const title = 'The Builder';
const description = 'Esse laborum ipsum velit mollit esse est dolore. Elit reprehenderit elit veniam cillum sunt consequat adipisicing.';

const WhoIndex = () => (
  <h1>SANTIAGO TORRES GUEVARA</h1>
);

const Who = () => {
  return (
    <Layout dataHeader={{ title, description }} dataMain={<WhoIndex />} />
  );
};

Who.propTypes = {

};

export default Who;
