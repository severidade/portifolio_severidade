import React from 'react';
import PropTypes from 'prop-types';

export default function ProjectDetails({ currentProject }) {
  const { title, description } = currentProject;

  const parse = require('html-react-parser');
  return (
    <div className='about_project'>
      <h1>{title}</h1>
      <div> {parse(description)} </div>
    </div>
  );
}


ProjectDetails.propTypes = {
  currentProject: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};