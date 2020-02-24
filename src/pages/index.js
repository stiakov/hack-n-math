import React from "react";
import { Link } from "gatsby";
import Layout from './components/Layout';

export default () => {
  return (
    <Layout>
      <h1>Santiago Torres G – Full-Stack Web Developer</h1>
      <Link to="/projects/">Go to projects &rarr;</Link>
    </Layout>
  )
}
