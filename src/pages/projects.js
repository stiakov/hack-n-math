import React from 'react';
import Layout from '../components/Layout';

const title = 'Great Projects';
const description = 'Esse laborum ipsum velit mollit esse est dolore. Elit reprehenderit elit veniam cillum sunt consequat adipisicing.';

const ProjectsIndex = () => (
  <h1>From Projects</h1>
);
const Projects = () => (
  <Layout dataHeader={{ title, description }} dataMain={<ProjectsIndex />} />
);

export default Projects;
