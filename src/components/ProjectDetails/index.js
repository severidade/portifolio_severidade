import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProjectDetails.module.css';
import calculateProjectNavigation from '../../utils/calculateProjectNavigation';
import ProjectNavigation from '../ProjectNavigation'

export default function ProjectDetails({ currentProject, projectList }) {
  const { 
    title,
    description,
    slug: slug_current,
    img,
    deployLink,
    githubLink,
  } = currentProject;

  const { previousProject, nextProject } = calculateProjectNavigation( slug_current, projectList );
  
  const parse = require('html-react-parser');


  return (
    <div className={ styles.about_project }>
      <h1>{title}</h1>
      <div> {parse(description)} </div>
      <div className={ styles.image_projeto } >
        <img src={ img } alt={ title } />
      </div> 

      <div className={ styles.container_links }>     
        {deployLink && deployLink.trim() !== '' && (
          <a
            className={ styles.btn_deploy } 
            href={ deployLink } target="_blank"
            rel="noopener noreferrer"
          >
            Ver deploy
          </a>
        )}

        {githubLink && githubLink.trim() !== '' && (
          <a
            className={ styles.btn_github } 
            href={ githubLink } 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Ver github
          </a>
        )}
      </div>
      <ProjectNavigation previousProject={previousProject} nextProject={nextProject} />
  </div>
  );
}


ProjectDetails.propTypes = {
  currentProject: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    deployLink: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
  }).isRequired,
  projectList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    })
  ).isRequired,
};
