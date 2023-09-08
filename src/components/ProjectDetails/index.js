import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import styles from './ProjectDetails.module.css';

export default function ProjectDetails({ currentProject, projectList }) {
  const { title, description, slug } = currentProject;

  const filteredProjectList = projectList.filter((project) => project.slug !== slug);

  const parse = require('html-react-parser');

  return (
    <div className={ styles.about_project }>
      <div className={ styles.image_projeto } ></div> 
      <h1>{title}</h1>
      <div> {parse(description)} </div>

      <ul>
        {filteredProjectList.map((project) => (
          <li key={project.slug}>
            <Link
              to={ `/projects/${project.slug}`}
            >
              {project.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


ProjectDetails.propTypes = {
  currentProject: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
  projectList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    })
  ).isRequired,
};
