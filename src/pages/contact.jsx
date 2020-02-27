import React from 'react';
import Layout from '../components/Layout';

const title = 'Contact';
const description = 'Feel free to reach me out.';

const ContactIndex = () => (
  <h1>Send me a message</h1>
);

const Contact = () => (
  <Layout dataHeader={{ title, description }} dataMain={<ContactIndex />} />
);

export default Contact;
