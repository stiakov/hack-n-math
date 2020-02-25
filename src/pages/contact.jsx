import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';

const title = 'Contact';
const description = 'Feel free to reach me out.';

const ContactIndex = () => (
  <h1>Send me a message</h1>
);

const Contact = () => {
  return (
    <Layout dataHeader={{ title, description }} dataMain={<ContactIndex />} />
  );
};

Contact.propTypes = {

};

export default Contact;
