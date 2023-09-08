import React from 'react';
import PropTypes from 'prop-types';
import styles from'./ProjectDetails.module.css'

export default function ProjectDetails({ currentProject }) {
  const { title, description } = currentProject;

  const parse = require('html-react-parser');
  return (
    <div className={ styles.about_project }>
      <div className={ styles.image_projeto } ></div> 
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