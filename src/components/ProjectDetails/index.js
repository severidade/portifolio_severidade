import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProjectDetails.module.css';
import calculateProjectNavigation from '../../utils/calculateProjectNavigation';
import ProjectNavigation from '../ProjectNavigation'
import ProjectImages from '../../data/ProjectImages'

export default function ProjectDetails({ currentProject, projectList }) {
  const { 
    title,
    description,
    slug: slug_current,
    deployLink,
    githubLink,
    id,
  } = currentProject;

  const { previousProject, nextProject } = calculateProjectNavigation( slug_current, projectList );
  
  const parse = require('html-react-parser');

  console.log(`este é o id do projeto ${id}`)

  return (

    <div className={ styles.about_project }>

      <figure className='gigante'>
        {ProjectImages[id] && ProjectImages[id].gallery ? (
          <img src={ProjectImages[id].gallery} alt={`📷 ${title} - Miniatura`} />
        ) : (
          <p>Sem 📷</p>
        )}
      </figure>

      <div className='project'>
        <h1>{title}</h1>
        <div> {parse(description)} </div>
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
    deployLink: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  projectList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    })
  ).isRequired,
};
